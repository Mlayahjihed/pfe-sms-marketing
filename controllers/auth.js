const User = require("../models/user");
const crypto = require("crypto");
const ErrorResponse = require("../utils/eroorResponse");
const bcrypt = require('bcryptjs');
const sendEmail = require("../utils/sendEmail");
const ValidateRegister = require("../validation/demande");
const ValidateLogin = require("../validation/login");
const ValidateFor = require("../validation/forgete");
const ValidateRes = require("../validation/resetpass");



exports.register = async (req, res, next) => {
  const { errors, isValid } = ValidateRegister(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      
    const user = await User.create(req.body);
    sendToken(user, 200, res);
  }} catch (error) {
    next(error);
  }
};


//   Login user
exports.login = async (req, res, next) => {
  const {errors, isValid} = ValidateLogin(req.body)
  
  try {
    if(!isValid){
      res.status(404).json(errors)
     }else{
      
    // Check that user exists by email
    const user = await User.findOne({email : req.body.email});
    if(!user){
      return next(new ErrorResponse("cordonnées invalides",401));
    }else{
      const isMatch = await bcrypt.compare( req.body.password , user.password);
      if (!isMatch){
        return next(new ErrorResponse("cordonnées invalides",401))
      }else{
        sendToken(user, 200, res);
      }
    }
   
  }} catch (error) {
   next(error);
  }
};

//Forgot Password Initialization
exports.forgetPassword = async (req, res, next) => {
// Send Email to email provided but first check if user exists
const {errors, isValid} = ValidateFor(req.body)

try {
  
    if(!isValid){
      res.status(404).json(errors)
     }else{
  const user = await User.findOne({ email :req.body.email});
  if (!user) {
    return next(new ErrorResponse("No email could not be sent", 404));
  }
  // Reset Token Gen and add to database hashed (private) version of token
  const resetToken = user.getResetPasswordToken();
  await user.save();
  
  // Create reset url to email to provided email
  const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
   // HTML Message
   const message = `
   <h1>You have requested a password reset</h1>
   <p>Please make a put request to the following link:</p>
   <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
 `;
 try {
  
  await sendEmail({
    to: user.email,
    subject: "Password Reset Request",
    text: message
  });

  res.status(200).json({ success: true, data: "Email Sent" });
} catch (err) {
  console.log(err);

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  return next(new ErrorResponse("Email could not be sent", 500));
}}
} catch (error) {
  next(error);
}
};

//reset Password 
exports.resetPassword = async (req, res, next) => {
 // Compare token in URL params to hashed token
 const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");
 const {errors, isValid} = ValidateRes(req.body)

 try {
  if(!isValid){
    res.status(404).json(errors)
   }else{
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ErrorResponse("Invalid Token", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(201).json({
    success: true,
    data: "Password Updated Success",
    token: user.getSignedJwtToken(),
  });

}} catch (error) {
  next(err); 
}
    
};




const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};
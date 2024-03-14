const Msg = require("../models/msg");
const User = require("../models/user");
const sendEmail = require("../utils/sendEmail");
const ValidateMsg = require("../validation/msg");

exports.Msg = async (req, res, next) => {
    const { errors, isValid } = ValidateMsg(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        
      const msg = await Msg.create(req.body);
      await msg.save();
      res.status(200).json({ success: true, data: "envoyée avec succés" });
    }} catch (error) {
      next(error);
    }
  };
  exports.Allmsg = async (req, res, next) => {
    try {
      
      const data =  await Msg.find().populate('email')
      res.status(200).json(data)

   } catch (error) {
       next(error);
   }
  };
  exports.delmsg = async (req, res, next) => {
  
    try {
      
      const message =req.params.msg;
      const email =req.params.email;
      await sendEmail({
        to: email,
        subject: "SWATEK SMSING",
        text: message
      });
        const data =  await Msg.findOneAndRemove({_id: req.params.id})
        res.status(200).json({message: "suprimer"})
    
    }  catch (error) {
        next(error);
     }
    
  };
  exports.Msg2 = async (req, res, next) => {
    try {  
      const usere = await User.findOne({_id : req.user.id } );
      req.body.nomprenom=usere.nomprenom;
      req.body.email=usere.email;
      const msg = await Msg.create(req.body);
      await msg.save();
      res.status(200).json({ success: true, data: "envoyée avec succés" });
    }catch (error) {
      next(error);
    }
  };
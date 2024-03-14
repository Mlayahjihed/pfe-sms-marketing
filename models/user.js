const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema({
    nomprenom: {
      type: String,
    },
    telephone:{
        type : String,
    },
    adress:{
        type : String,
    },
    socite:{
        type : String
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      minlength: 8,
    },
    role:{
      type : String,
      default : "USER",
  },
   
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  });
  
  UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  
  UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id ,nomprenom :this.nomprenom,role : this.role}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  
  UserSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hash token (private key) and save to database
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    // Set token expire date
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes
  
    return resetToken;
  };
  
  const users = mongoose.model("users", UserSchema);
  
  module.exports = users;
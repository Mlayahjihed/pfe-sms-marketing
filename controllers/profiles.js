const User = require("../models/user");
const contact = require("../models/contact");
const sms = require("../models/sms");
const achat = require("../models/achat");
const groupe = require("../models/groupe");
const ValidateProfile = require("../validation/profile");
exports.delprofiles = async (req, res, next) => {
    try {
        await achat.deleteMany({ user : req.params.id})
        await contact.deleteMany({ user : req.params.id})
        await groupe.deleteMany({ user : req.params.id})
         await sms.deleteMany({user : req.params.id})
        const data =  await User.findOneAndRemove({_id: req.params.id})
        res.status(200).json({message: "suprimer"})
 
     } catch (error) {
        next(error);
     }
    
  };
  exports.getprofiles = async (req, res, next) => {
    try {
        const data =  await User.find({role : "USER"}).populate('email')
        res.status(200).json(data)
 
     } catch (error) {
         next(error);
     }
    
  };
  exports.getprofile = async (req, res, next) => {
    try {
        const data =  await User.findOne({email:req.user.email})
        res.status(200).json(data)
 
     } catch (error) {
        next(error);
     }
    
  };
  exports.upprofiles = async (req, res, next) => {
    const {errors, isValid} = ValidateProfile(req.body)

    try {
        if(!isValid){
            res.status(404).json(errors)
           }else{
               await  User.findOneAndUpdate(
                    {_id: req.user._id},
                    req.body,
                    {new: true}
                ).then(result=>{
                    res.status(200).json(result)
                })}
            
        
        
    } catch (error) {
        next(error);
    }
}
;
 

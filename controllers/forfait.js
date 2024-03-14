const forfaits = require("../models/forfaits");
const User = require("../models/user");
const achat = require("../models/achat");
const Validateforfait2 = require("../validation/upforfait");
const Achatfor = require("../validation/demandeachat");
const Validateforfait = require("../validation/forfait");
const achats = require("../models/achat");

exports.addfor = async (req, res, next) => {
    const { errors, isValid } = Validateforfait(req.body);
    try {
      if (!isValid) {
        res.status(404).json(errors);
      } else {
        
       await forfaits.create(req.body);
       res.status(200).json({ success: true, data: "ajoueter" });
    }} catch (error) {
      next(error);
    }
  };
  exports.getforfaits = async (req, res, next) => {
    try {
        const data =  await forfaits.find().populate('nompack')
        res.status(200).json(data)
 
     } catch (error) {
         next(error);
     }
    
  };
  exports.delfor = async (req, res, next) => {
    try {
        const data =  await forfaits.findOneAndRemove({_id: req.params.id})
        res.status(200).json({message: "suprimer"})
 
     } catch (error) {
        next(error);
     }
    
  };
  exports.getfor = async (req, res, next) => {
    try {
        const data =  await forfaits.findOne({_id:req.params.id})
        res.status(200).json(data)
 
     } catch (error) {
        next(error);
     }
    
  };
  exports.upfor = async (req, res, next) => {
    const { errors, isValid } = Validateforfait2(req.body);
    try {if (!isValid) {
      res.status(404).json(errors);
    }else{
        
               await  forfaits.findOneAndUpdate(
                    {_id: req.params.id},
                    req.body,
                    {new: true}
                ).then(result=>{
                    res.status(200).json(result)
                })
              }
        
        
    } catch (error) {
        next(error);
    }
};
exports.achat = async (req, res, next) => {
  const { errors, isValid } = Achatfor(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    }else{ 
    const data = await achat.findOne({user: req.user.id,etat:"Accepter" })
    if (data){ 
      res.status(404).json({message: "false"})
    }else{
     const user = await User.findOne({_id: req.user.id})
       if (user){
       const forfait = await forfaits.findOne({_id: req.params.id})
       if (forfait){
        req.body.user = user._id
        req.body.forfait = forfait._id
        req.body.nbrsms = forfait.nbrsms
        req.body.dateachat= Date.now()
        var a= Number (forfait.validite)
        var ss= new Date()
        req.body.datefin=ss.setMonth(ss.getMonth()+a)  
        await achat.create(req.body)
      
      }
        res.status(200).json({message: "success"})
      }}
    
  } }catch (error) {
      next(error);
  }
};

exports.alldem = async (req, res, next) => {
  try {
    
      const data =  await achat.find().populate(['user','forfait'])
      res.status(200).json(data)

   } catch (error) {
       next(error);
   }
  
};
exports.delach = async (req, res, next) => {
  try {
      const data =  await achat.findOneAndRemove({_id: req.params.id})
      res.status(200).json({message: "suprimer"})

   } catch (error) {
      next(error);
   }
  
};
exports.upach = async (req, res, next) => {
  try {
    req.body.etat="Accepter";
    await  achat.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      {new: true}
  ).then(result=>{
      res.status(200).json(result)
  })
  } catch (error) {
    next(error);
  }
  
};
exports.getach = async (req, res, next) => {
  try {
      const data =  await achat.findOne({user:req.user.id ,etat:"Accepter"})
      if(data===null){
       req.body.nbrsms=0;
        res.status(200).json(req.body)
      }else{res.status(200).json(data)}
      

   } catch (error) {
      next(error);
   }
  
};
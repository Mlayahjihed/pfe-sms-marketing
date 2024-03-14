const express = require("express");
const router = express.Router();
// Controllers
const { planfie } = require("../controllers/planfiesms");
const passport = require("passport");
const jwt = require('jsonwebtoken');
const { ROLES, inRole } = require("../security/rolemiddleware");
const achat = require("../models/achat");
const sms = require("../models/sms");

router.route("/planifie").post(passport.authenticate('jwt', { session: false }),async(req, res) => {
    const date = new Date(req.body.form.date);
    const entet = req.body.form.entet;
    const msg = req.body.form.sms;
    const s = req.body.contactss
    const v = req.body.groupess  
    if ((s.length === undefined) && (v.length === undefined)) {
        res.status(404).json({ success: false, data: "plese select a groupe ou cantacts" });
      } else {
        var x = []
        var y = []
        for (let j = 0; j < s.length; j++) {
          x[j] = s[j].value
        }
        for (let i = 0; i < v.length; i++) {
          y[i] = v[i].value
        }
        var groupe = [];
      var a = 0;
        for (let t = 0; t < y.length; t++) {
            var b = y[t];
            let i = 0;
            while (i < b.length) {
              groupe[a] = b[i];
              i++;
              a++;
            }
          }
          let j = groupe.length;
          let q = j;
          let i = 0;
          while (j < x.length + q) {
            groupe[j] = x[i];
            i++;
            j++;
          }
          var con = [...new Set(groupe)]
          var data =  await achat.findOne({user:req.user.id,etat:"Accepter"})
      
          if(data.nbrsms>=con.length){
for (let m = 0; m < con.length; m++) {
   var num =con[m];
            try {
                await planfie({date,entet,msg,num});
              
            } catch (error) {
                res.status(502).json({ success: false, data: "probléme" });}}
            data.nbrsms=data.nbrsms-con.length
            if (data.nbrsms===0) {
              data.etat="forfait epouisé"
            }
                     await  achat.findOneAndUpdate(
                      {user:req.user.id,etat:"Accepter"},
                      data,
                      {new: true}
                  ) 
          req.body.user= req.user.id;
      req.body.entet= req.body.form.entet;
      req.body.sms= req.body.form.sms;
      req.body.dateenv= req.body.form.date;
      req.body.destinataire=con
      await sms.create(req.body);
           res.status(200).json({ success: true, data: "message planifié avec succés" });
          
        } else{res.status(404).json({ success: false, data: " nombre sms invalid" });}
        }
      
});





module.exports = router;
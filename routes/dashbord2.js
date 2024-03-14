const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');
const achat = require("../models/achat");
const sms = require("../models/sms");
const lodash=require('lodash');
const forfaits = require("../models/forfaits");
router.route("/dash").get(async(req, res) => {
    let data =  await achat.find().populate('forfait')
    
   let f =  await forfaits.find()
let dates=lodash.groupBy(data,function(v){return v.dateachat.getFullYear()})
let result=[];
let forf =f.map(val=>val.nompack)
Object.keys(dates).forEach(function(key) {
    let tab=f.map(val=>0)
    
    for(let d=0;d<dates[key].length;d++){
       let index=forf.indexOf(dates[key][d].forfait.nompack);
        tab[index]++ 
    }
    
     result.push({year:key,count:tab})
});

    res.status(200).json({forfaits:forf,data:result})
});
router.route("/dash2").get(async(req, res) => {
    let data =  await sms.find()
    
    let result=[];
let dates=lodash.groupBy(data,function(v){return v.dateenv.getMonth()+1})
Object.keys(dates).forEach(function(key) {
     result.push({Month:key,count:dates[key].length})
});
    res.status(200).json(result)
}



);


module.exports = router; 
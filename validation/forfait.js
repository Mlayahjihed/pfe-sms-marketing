const isEmpty = require("./isEmpty");



const validator = require("validator");

module.exports = function Validateforfait(data) {
    let errors = {};
  
    data.nompack = !isEmpty(data.nompack) ? data.nompack : "";
    data.prix = !isEmpty(data.prix) ? data.prix : "";
    data.nbrsms = !isEmpty(data.nbrsms) ? data.nbrsms : "";
    
    data.validite = !isEmpty(data.validite) ? data.validite : "";
    data.dateD = !isEmpty(data.dateD) ? data.dateD : "";
    data.dateF = !isEmpty(data.dateF) ? data.dateF : "";

    
   
    
  
    if (validator.isEmpty(data.nompack )) {
      errors.nompack  = "Obligatoire";
    }
    if (validator.isEmpty(data.prix)) {
        errors.prix = "Obligatoire";
      }
      if (validator.isEmpty(data.nbrsms)) {
        errors.nbrsms = "Obligatoire";
      }
      
      if (validator.isEmpty(data.validite)) {
        errors.validite = "Obligatoire";
      }
 
     
     
   
   
    
  
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
  };
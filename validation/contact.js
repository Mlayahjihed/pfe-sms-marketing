const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function Validatecontact(data) {
    let errors = {};
  
   
    data.telephone = !isEmpty(data.telephone) ? data.telephone : "";
    data.datenaiss = !isEmpty(data.datenaiss) ? data.datenaiss : "";
    data.datedec = !isEmpty(data.datedec) ? data.datedec : "";
    
    
      if (data.telephone.length!==8) {
        errors.telephone = "Téelephone doit etre 8 chiffre";
      }
      if (validator.isEmpty(data.telephone)) {
        errors.telephone = "Obligatoire";
      } 
      if (new Date(data.datedec)<=new Date(data.datenaiss)) {
        errors.datedec = " date fausse";
      } 
      if (validator.isEmpty(data.datedec)) {
        errors.datedec = "Obligatoire";
      } 
      if (validator.isEmpty(data.datenaiss)) {
        errors.datenaiss = "Obligatoire";
      } 
     
   
    
  
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
  };
const isEmpty = require("./isEmpty");



const validator = require("validator");
module.exports = function Achatfor(data) {
    let errors = {};
  
    data.paiment = !isEmpty(data.paiment) ? data.paiment : "";
    

    
   
    
  
    if (validator.isEmpty(data.paiment )) {
      errors.paiment  = "Obligatoire";
    }
   
   
    
  
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
  };
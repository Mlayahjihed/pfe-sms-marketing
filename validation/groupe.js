const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function Validategroupe(data) {
    let errors = {};
  
    data.nomgroupe = !isEmpty(data.nomgroupe) ? data.nomgroupe : "";
    data.age = !isEmpty(data.age) ? data.age : "";
   
  
    if (validator.isEmpty(data.nomgroupe)) {
      errors.nomgroupe = "Obligatoire";
    }
    if (validator.isEmpty(data.age)) {
      errors.age = "Obligatoire";
    }
    
    
  
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
  };
const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateRes(data) {
    let errors = {};
  
   
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confirme = !isEmpty(data.confirme) ? data.confirme : "";
  
  
    if (data.password.length<8) {
      errors.password = "Mot de passe doit étre au minimum 8 caractéres";
    }
    if (validator.isEmpty(data.password)) {
      errors.password = "Obligatoire";
    }
    if(!validator.equals(data.password, data.confirme)){
      errors.confirme = "Mot de passe incompatible";
    }
    if (validator.isEmpty(data.confirme)) {
      errors.confirme = "Obligatoire";
    }
    
  
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
  };
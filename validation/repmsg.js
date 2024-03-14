const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateRes(data) {
    let errors = {};
  
   
    data.msg = !isEmpty(data.msg) ? data.msg : "";
  
    if (validator.isEmpty(data.msg)) {
      errors.msg = "Obligatoire";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
    
  };
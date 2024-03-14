const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function Validateprofile(data) {
    let errors = {};
  
    data.nomprenom = !isEmpty(data.nomprenom) ? data.nomprenom : "";
    data.telephone = !isEmpty(data.telephone) ? data.telephone : "";
    data.adress = !isEmpty(data.adress) ? data.adress : "";
    data.socite = !isEmpty(data.socite) ? data.socite : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    
  
    if (validator.isEmpty(data.nomprenom)) {
      errors.nomprenom = "Obligatoire";
    }
    if (validator.isEmpty(data.telephone)) {
        errors.telephone = "Obligatoire";
      }
      if (validator.isEmpty(data.adress)) {
        errors.adress = "Obligatoire";
      }
      if (validator.isEmpty(data.socite)) {
        errors.socite = "Obligatoire";
      }
    if (!validator.isEmail(data.email)) {
      errors.email = "Verifier E-mail";
    }
    if (validator.isEmpty(data.email)) {
      errors.email = "Obligatoire";
    }
   
    
  
  
    return {
        errors,
        isValid: isEmpty(errors)
    }
  };
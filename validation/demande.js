const isEmpty = require("./isEmpty");

const validator = require("validator");

module.exports = function ValidateRegister(data) {
    let errors = {};
  
    data.nomprenom = !isEmpty(data.nomprenom) ? data.nomprenom : "";
    data.telephone = !isEmpty(data.telephone) ? data.telephone : "";
    data.adress = !isEmpty(data.adress) ? data.adress : "";
    data.socite = !isEmpty(data.socite) ? data.socite : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confirme = !isEmpty(data.confirme) ? data.confirme : "";
  
    if (validator.isEmpty(data.nomprenom)) {
      errors.nomprenom = "Obligatoire";
    }
    if (data.telephone.length!==8) {
      errors.telephone = "télephone doit étre 8 chiffere";
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
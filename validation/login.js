const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateLogin(data) {
  let errors = {};


  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";


 
  if (!validator.isEmail(data.email)) {
    errors.email = "Verifier E-mail";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Obligatoire";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Obligatoire";
  }
 
 


  return {
      errors,
      isValid: isEmpty(errors)
  }
};
const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateMsg(data) {
  let errors = {};

  data.nomprenom = !isEmpty(data.nomprenom) ? data.nomprenom : "";

  data.email = !isEmpty(data.email) ? data.email : "";
  data.msg = !isEmpty(data.msg) ? data.msg : "";


  if (validator.isEmpty(data.nomprenom)) {
    errors.nomprenom = "Obligatoire";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Verifier E-mail";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Obligatoire";
  }
  if (validator.isEmpty(data.msg)) {
    errors.msg = "Obligatoire";
  }
 


  return {
      errors,
      isValid: isEmpty(errors)
  }
};
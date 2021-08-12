const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function validateUser(user) {
  let errors = {};
  user.Email = isEmpty(user.Email) ? "" : user.Email;
  user.password = isEmpty(user.password) ? 0 : user.password;
  user.password2 = isEmpty(user.password2) ? 0 : user.password2;


if(Validator.isEmpty(user.Email)){
    errors.Email = "email is required"
}
if(Validator.isEmpty(user.password)){
    errors.password = "password is required"
}
if(Validator.isEmpty(user.password2)){
    errors.password2 = "re-password is required"
}
if(Validator.equals(user.password,user.password2)){
    errors.verifyPass = "pass word are not the same"
}
return {
    errors,
    isValid:isEmpty(errors)
}
};

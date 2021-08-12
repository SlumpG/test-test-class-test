const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function validateData(data) {
  let errors = {};
  data.firstName = isEmpty(data.firstName) ? "" : data.firstName;
  data.lastName = isEmpty(data.lastName) ? "" : data.lastName;
  data.Email = isEmpty(data.Email) ? "" : data.Email;
  data.age = isEmpty(data.age) ? 0 : data.age;

  if(Validator.isEmpty(data.firstName)){
      errors.firstName = "first name is required"
  }
  if(Validator.isEmpty(data.lastName)){
    errors.lastName= "last name is required"
}
if(Validator.isEmpty(data.Email)){
    errors.Email = "email is required"
}
if(Validator.isEmpty(data.age)){
    errors.age = "age is required"
}
if(Validator.IsEmail(data.Email)){
    errors.isEmail = "email is fucked up" 
}


return {
    errors,
    isValid:isEmpty(errors)
}
};

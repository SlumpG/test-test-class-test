const mongoose = require("mongoose");

const Schema = mongoose.Schema;
////////////////no reqired////////////////
const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  Email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});
module.exports = mongoose.model("Student", userSchema);
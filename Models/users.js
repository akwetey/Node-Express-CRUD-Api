const mongoose = require("mongoose");

const { Schema } = mongoose;

//create schema and model
const UserSchema = new Schema({
  uuid: String,
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: String,

  phonenumber: String,

  timestamps: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

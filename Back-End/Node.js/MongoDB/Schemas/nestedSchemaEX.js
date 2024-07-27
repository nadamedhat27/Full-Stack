const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String
})

const numberSchema = new mongoose.Schema({
  mobileNo: Number | null,
  homeNo: Number
})


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  numbers: numberSchema,
  address: addressSchema
})

module.exports = mongoose.model("person", personSchema)
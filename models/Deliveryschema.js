const mongoose = require("mongoose");

const deliveryschema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  licensenumber: {
    type: Number,
    required: true
  },
  bankaccountnum: {
    type: Number,
    required: true,
    unique:true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true,
    unique: true
  },
 /* profile:{
    data: Buffer,
    contentType: String,
  }*/
});

const delivery = mongoose.model('delivery', deliveryschema);

module.exports = delivery;

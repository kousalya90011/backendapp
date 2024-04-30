const mongoose = require("mongoose");

const Sellerschema = new mongoose.Schema({
  restuarentname: {
    type: String,
    required: true
  },
  licensenumber: {
    type: Number,
    required: true
  },
  pannumber: {
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

const seller = mongoose.model('seller', Sellerschema);

module.exports = seller;

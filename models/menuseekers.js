//menuseeker
const mongoose = require('mongoose');

const menuschema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  price: {
    type: Number,
    required: true
  },
  varient: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  category:{
    type:String,
    required:true
  },
  offers:{
    type:Number,
    required:true
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const menuseeker = mongoose.model('menuseeker', menuschema);

module.exports = menuseeker;

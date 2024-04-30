
//menuseeker
const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
    unique:true
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
  image: {
    data: Buffer,
    contentType: String,
  },
});

const cartseeker = mongoose.model('Cart', CartSchema);

module.exports = cartseeker;

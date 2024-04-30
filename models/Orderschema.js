const mongoose = require('mongoose');

const Orderschema = new mongoose.Schema({
  itemname: {
    type: String,
    required: true,
    unique: true
  },
  customername: {
    type: String,
    required: true
  },
  customeremail:{
    type:String,
    required:true
  },
  contact: {
    type: Number,
    required: true
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
    type: Number,
    required: true
  },
});

const SellerOrder = mongoose.model('sellerorders', Orderschema);

module.exports = SellerOrder;

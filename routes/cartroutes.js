const cartcontroller = require("../controllers/cartcontroller");

const express = require("express");
const cartrouter = express.Router();

// seller routes
cartrouter.post('/insertcart', upload.single('image'), cartcontroller.insertcart);
cartrouter.get("/viewcart",cartcontroller.viewcart);


module.exports = cartrouter;

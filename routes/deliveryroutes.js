const deliverycontroller = require("../controllers/deliverycontroller");

const express = require("express");
const deliveryrouter = express.Router();

// seller routes
deliveryrouter.post("/insertdelivery", deliverycontroller.insertdelivery);
deliveryrouter.post("/checkdeliverylogin", deliverycontroller.checkdeliverylogin);
deliveryrouter.get("/viewdelprofile/:email", deliverycontroller.viewdelprofile);



module.exports = deliveryrouter;

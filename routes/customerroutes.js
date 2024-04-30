const customercontroller = require("../controllers/customercontroller");

const express = require("express");
const customerrouter = express.Router();

// seller routes
customerrouter.post("/insertcustomer", customercontroller.insertcustomer);
customerrouter.post("/checkcustomerlogin", customercontroller.checkcustomerlogin);
customerrouter.get("/viewcustomerprofile/:email", customercontroller.viewcustomerprofile);

module.exports = customerrouter;

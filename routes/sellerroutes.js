const sellercontroller = require("../controllers/sellercontroller");

const express = require("express");
const sellerrouter = express.Router();

// seller routes
sellerrouter.post("/insertseller", sellercontroller.insertseller);
sellerrouter.post("/checksellerlogin", sellercontroller.checksellerlogin);
sellerrouter.get("/viewprofile/:email", sellercontroller.viewprofile);

module.exports = sellerrouter;

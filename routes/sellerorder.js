const express = require("express");
const sellerOrdersRouter = express.Router();
const sellerOrdersController = require("../controllers/sellerorders");

sellerOrdersRouter.post("/insertorder", sellerOrdersController.insertorder);
sellerOrdersRouter.get("/vieworders", sellerOrdersController.vieworders);
sellerOrdersRouter.get("/emails", sellerOrdersController.emails);



module.exports = sellerOrdersRouter;

const sellerorder = require("../models/Orderschema");

const insertorder = async (request, response) => {
    try {
      const input = request.body;
      const newOrder = new sellerorder(input);
      await newOrder.save();
      response.send('Registered Successfully');
    } catch (e) {
      response.status(500).send(e.message);
    }
  };

  const vieworders = async (request, response) => {
    try {
      console.log('View Orders Request Received');
      const seller = await sellerorder.find();
      console.log('Orders Fetched:', seller);
      if (!seller) {
        response.send("DATA NOT FOUND");
      } else {
        response.json(seller);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      response.status(500).send(error.message);
    }
  };

  const emails = async (request, response) => {
    try {
      console.log('emails were searching');
      const orders = await sellerorder.find({}, { customeremail: 1, _id: 0 }).maxTimeMS(2000000); // Projecting only the customeremail field
      console.log('Orders Fetched:', orders);
      if (!orders || orders.length === 0) {
        response.send("No orders found");
      } else {
        const emails = orders.map(order => order.customeremail); // Extracting emails from orders
        response.json(emails);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      response.status(500).send(error.message);
    }
  };
  
  module.exports = { insertorder, vieworders, emails };
  
  
  module.exports = { insertorder, vieworders, emails };
  
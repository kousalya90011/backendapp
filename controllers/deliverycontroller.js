const Delivery = require("../models/deliveryschemas");

const insertdelivery = async (request, response) => {
  try {
    const input = request.body;
    const deliveryPerson = new Delivery(input);
    await deliveryPerson.save();
    response.send('Registered Successfully');
  } catch (e) {
    response.status(500).send(e.message);
  }
};


const checkdeliverylogin = async (request, response) => {
  try {
    const input = request.body;
    const delivery = await Delivery.findOne(input);
    response.json(delivery);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const viewdelprofile = async (request, response) => {
  try {
    const { email } = request.params; // Retrieve the email from params
    const delivery = await Delivery.findOne({ email }); // Find a single document by email
    if (!delivery) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(delivery);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { insertdelivery, checkdeliverylogin, viewdelprofile };
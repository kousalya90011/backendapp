const Customer = require("../models/CustomerSchema");
//const customerApplicant = require("../models/customerapplicant");

const insertcustomer = async (request, response) => {
  try {
    const input = request.body;
    const customerPerson = new Customer(input);
    await customerPerson.save();
    response.send('Registered Successfully');
  } catch (e) {
    response.status(500).send(e.message);
  }
};


const checkcustomerlogin = async (request, response) => {
  try {
    const input = request.body;
    const customer = await Customer.findOne(input);
    response.json(customer);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const viewcustomerprofile = async (request, response) => {
  try {
    const { email } = request.params; // Retrieve the email from params
    const customer = await Customer.findOne({ email }); // Find a single document by email
    if (!customer) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(customer);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { insertcustomer, checkcustomerlogin, viewcustomerprofile };
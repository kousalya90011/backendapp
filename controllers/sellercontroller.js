const Seller = require("../models/sellerschema");


const insertseller = async (request, response) => {
  try {
    const input = request.body;
    const seller = new Seller(input);
    await seller.save();
    response.send('Registered Successfully');
  } catch (e) {
    response.status(500).send(e.message);
  }
};

const checksellerlogin = async (request, response) => {
  try {
    const input = request.body;
    const seller = await Seller.findOne(input);
    response.json(seller);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const viewprofile = async (request, response) => {
  try {
    const { email } = request.params; // Retrieve the email from params
    const seller = await Seller.findOne({ email }); // Find a single document by email
    if (!seller) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(seller);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};
const changesellerpwd = async (request, response) => {
  try 
  {
    const { username, oldpassword, newpassword } = request.body;

    const seller = await Seller.findOne({ username, password: oldpassword });
    
     if (!seller) 
    {
      response.status(400).send('Invalid Old Password');
    }
    else
    {
        if(oldpassword==newpassword)
        {
          response.status(400).send('Both Passwords are Same');
        }
        else
        {
          await Seller.updateOne({username},{ $set: { password: newpassword } });
           response.json('Password Updated Successfully');
        }
      
    }
  } 
  catch (error) 
  {
    response.status(500).send(error.message);
  }
};


module.exports = { insertseller, checksellerlogin, viewprofile, changesellerpwd};
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config(); //.env
const menuController = require('./controllers/menucontroller');
const sellerrouter = require("./routes/sellerroutes");
const deliveryrouter = require("./routes/deliveryroutes");
const sellerorder = require("./routes/sellerorder");
const cartcontroller = require("./controllers/cartcontroller");
const customerroutes = require("./routes/customerroutes");
const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());

 const dburl= process.env.mongodburl
  mongoose.connect(dburl).then(() => {
      console.log("Connected to DB Successfully")
      }).catch((err) => {
      console.log(err.message)
  });


app.use("", customerroutes);
app.use("", sellerrouter);
app.use("", deliveryrouter);
app.use("", sellerorder);

app.post('/insertmenu', upload.single('image'), menuController.insertmenu);
app.get('/viewmenu', menuController.viewmenu);
app.delete('/deletemenu/:itemname', menuController.deletemenu);

app.post('/insertcart', upload.single('image'), cartcontroller.insertcart);
app.get('/viewcart', cartcontroller.viewcart);

const port = process.env.PORT || 2032
app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});

const { insertseller, checksellerlogin, viewprofile} = require('./controllers/sellercontroller');

app.post('/insertseller', insertseller);
app.post('/checksellerlogin', checksellerlogin);
app.get('/viewprofile/:email', viewprofile);

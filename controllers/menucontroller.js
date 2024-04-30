// controller.js
const Menuseeker = require('../models/menuseekers');

const insertmenu = async (request, response) => {
  try {
    const { itemname,email , price, varient ,quantity,category,offers } = request.body;

    const image = request.file ? request.file.buffer : undefined;

    const menuseeker = new Menuseeker({
      itemname,
      email,
      price,
      varient,
      quantity,
      category,
      offers,
      image: {
        data: image,
        contentType: request.file ? request.file.mimetype : undefined,
      },
    });

    await menuseeker.save();
    response.send('Registered Successfully');
  } catch (e) {
    console.error(e);
    response.status(500).send(e.message || 'Internal Server Error');
  }
};

const viewmenu = async (request, response) => {
  try {
    const displaymenu = await Menuseeker.find();
    if (displaymenu.length === 0) {
      response.send("DATA NOT FOUND");
    } else {
      // Send the image data along with other data
      const menuWithImageData = displaymenu.map(item => ({
        itemname: item.itemname,
        email:item.email,
        price: item.price,
        varient:item.varient,
        quantity: item.quantity,
        category:item.catergory,
        offers:item.offers,
        image: {
          contentType: item.image.contentType,
          data: item.image.data.toString('base64'),
        },
      }));
      response.json(menuWithImageData);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const deletemenu = async (request, response) => {
  try {
    const { itemname } = request.params;
    console.log('Deleting item with Name:', itemname);

    const item = await Menuseeker.findOneAndDelete({ "itemname": itemname });

    if (item != null) {
      console.log('Deleted item:', item);
      response.send("Deleted Successfully");
    } else {
      response.status(404).send("Item Not Found");
    }
  } catch (error) {
    console.error('Error during delete:', error.message);
    response.status(500).send(error.message);
  }
};


module.exports = { insertmenu, viewmenu, deletemenu };

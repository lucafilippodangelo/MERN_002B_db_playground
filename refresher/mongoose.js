const mongoose = require('mongoose');

const ProductBlueprint = require('./models/product');

mongoose.connect(
    'mongodb+srv://sviluppodangelo:05SYWPiD9x4WNpiA@cluster0.spmvbue.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
});

const createProduct = async (req, res, next) => {
  const createdProduct = new ProductBlueprint({
    name: req.body.name,
    price: req.body.price
  });
  console.log("before "+ createdProduct);//as pper logs -> the objectID is defined before to save
  const result = await createdProduct.save(); //LD "save" is a mongoo method
  console.log(typeof createdProduct._id); //Access to "ObjectID"
  console.log("after "+ createdProduct._id);//ObjectID is available after saving
  res.json(result);
};

const getProducts = async (req, res, next) => {
    //LD in "mongoose" FIND returns an array by default. No need to convert/cast
    // "exec()" turns it to a promise
    const products = await ProductBlueprint.find().exec();
    res.json(products);
  }

exports.createProduct = createProduct;
exports.getProducts = getProducts;
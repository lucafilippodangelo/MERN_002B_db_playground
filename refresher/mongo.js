
const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://sviluppodangelo:05SYWPiD9x4WNpiA@cluster0.spmvbue.mongodb.net/?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price
  };
  console.log("001");
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection("products");
    const result = await collection.insertOne(newProduct);
} catch (error) {
    return res.json({ message: "Could not store data." });
}
  client.close();
  console.log("003");
  res.json(newProduct);
};

const getProducts = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
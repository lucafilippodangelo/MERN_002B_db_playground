//LD blueprint for a model
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

//LD exporting to reuse.
module.exports = mongoose.model('ProductM', productSchema);
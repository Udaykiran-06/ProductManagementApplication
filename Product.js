const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  imageUrl: {
    type: String,
    default: '/images/image2.jpeg'
  }
});

module.exports = mongoose.model('Product', productSchema);
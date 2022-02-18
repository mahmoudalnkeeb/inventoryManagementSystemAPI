const mongoose = require('../config/db');

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taxes: {
    type: Number,
    required: false,
  },
  ads: {
    type: Number,
    required: false,
  },
  discount: {
    type: Number,
    required: false,
  },
  count: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', Product);

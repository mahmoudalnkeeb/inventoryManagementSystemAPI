const product = require('../models/product');

read = async (req, res) => {
  const products = await product.find();
  res.json(products);
};
readOne = async (req, res) => {
  if (req.query.name) {
    const products = await product.findOne({ name: req.query.name });
    res.json(products);
  }
  if (req.query.price) {
    const products = await product.findOne({ price: req.query.name });
    res.json(products);
  }
  if (req.query.category) {
    const products = await product.findOne({ category: req.query.name });
    res.json(products);
  }
};
create = async (req, res) => {
  const productToAdd = product.findOne({ name: req.body.names });
  if (productToAdd == null) {
    const newProduct = new product({
      name: req.body.name,
      price: req.body.price,
      taxes: req.body.taxes,
      ads: req.body.ads,
      discount: req.body.discount,
      count: req.body.count,
      category: req.body.category,
    });
    product.create(newProduct, function (err, doc) {
      res.json({ message: doc.name + ' created' });
      if (err) return err;
    });
  } else {
    res.json({ message: 'product already exists you can update it' });
  }
};
update = async (req, res) => {
  const updatedProduct = await product.findOneAndUpdate(
    { name: req.body.filter },
    req.body
  );
  console.log(req.body);
  res.json(updatedProduct);
};
deleteOne = async (req, res) => {
  const deletedProduct = await product.findOneAndDelete({
    name: req.body.filter,
  });
  res.json(deletedProduct);
};

module.exports = { read, readOne, create, update, deleteOne };

const product = require('../models/product');

read = async (req, res) => {
  const products = await product.find();
  res.status(200).json(products);
};
readSold = async (req, res) => {
  const products = await product.find({ count: 0 });
  res.status(200).json(products);
};
readOne = async (req, res) => {
  try {
    if (req.query.name) {
      const products = await product.findOne({ name: req.query.name });
      res.status(200).json(products);
    } else if (req.query.price) {
      const products = await product.find({ price: req.query.price });
      res.status(200).json(products);
    } else if (req.query.category) {
      const products = await product.find({ category: req.query.category });
      res.status(200).json(products);
    }
  } catch (error) {
    return error;
  }
};
create = async (req, res) => {
  try {
    const productToAdd = await product.findOne({ name: req.body.name });
    if (!productToAdd) {
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
        res.status(200).json({ message: doc.name + ' created' });
        if (err) return err;
      });
    } else {
      res
        .status(400)
        .json({ message: 'product already exists you can update it' });
    }
  } catch (error) {
    return error;
  }
};
update = async (req, res) => {
  try {
    const updatedProduct = await product.findOneAndUpdate(
      { _id: req.body.filter },
      req.body
    );
    res.status(200).json(`product ${updatedProduct.name} deleted`);
  } catch (error) {
    return error;
  }
};
deleteOne = async (req, res) => {
  try {
    const deletedProduct = await product.findOneAndDelete({
      _id: req.body.filter,
    });
    res.status(200).json(`product ${deletedProduct.name} deleted`);
  } catch (error) {
    return error;
  }
};

module.exports = { read, readOne, create, update, deleteOne, readSold };

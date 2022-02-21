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
      {
        name: req.body.name,
        price: req.body.price,
        taxes: req.body.taxes,
        ads: req.body.ads,
        discount: req.body.discount,
        count: req.body.count,
        category: req.body.category,
      }
    );
    res.status(200).json({
      message: `${updatedProduct.name} updated`,
    });
  } catch (error) {
    return error;
  }
};

//Risky Should have authorization

let admin = {
  user: 'dad6df1829777ebc57ef0ae3b6bf4eda8cf1e0101abc1b02528d3c4b27a90288',
  pass: '8d87be07f7dbaf5faf91d7d690fd388396ae7b392a683bc5ed923ce10858125b',
};

deleteOne = async (req, res) => {
  if (req.body.pass != admin.pass && req.body.user == admin.user) {
    res.status(401).json({ user: true, pass: false });
  } else if (req.body.user != admin.user && req.body.pass == admin.pass) {
    res.status(401).json({ user: false, pass: true });
  } else if (req.body.user == admin.user && req.body.pass == admin.pass) {
    try {
      const deletedProduct = await product.findOneAndDelete({
        _id: req.body.filter,
      });
      res
        .status(200)
        .json({
          message: `${deletedProduct.name} updated`,
          user: true,
          pass: true,
        });
    } catch (error) {
      return error;
    }
  }
};


deleteAll = async (req, res) => {
  try {
    const deletedProduct = await product.deleteMany();
    res
      .status(200)
      .json({ message: `ALL PRODUCTS HAVE BEEN PERMANENTLY REMOVED` });
  } catch (error) {
    return error;
  }
};

module.exports = {
  read,
  readOne,
  create,
  update,
  deleteOne,
  readSold,
  deleteAll,
};

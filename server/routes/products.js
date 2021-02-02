const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { check, validationResult } = require('express-validator');

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// get only my products
router.get('/my', async (req, res) => {
  try {
    const products = await Product.find({ createdBy: req.user.id });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// get product my id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// add new product
router.post(
  '/add',
  [[check('name', 'Please enter name at least 2 character long').isLength({ min: 2 })]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, price, countInStock, imageUrl } = req.body;

    try {
      const newProduct = new Product({
        createdBy: req.user.id,
        name,
        description,
        price,
        countInStock,
        imageUrl,
      });
      const product = await newProduct.save();
      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

//update product
router.put('/update/:id', async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, description, price, countInStock, imageUrl } = req.body;

  const productFields = { name, description, price, countInStock, imageUrl };
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: productFields },
      { new: true }
    );
    res.send(product);
  } catch (err) {
    console.errors(err.message);
    res.status(500).send('Server Error');
  }
});

// delete product
router.delete('/delete/:id', async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    await Product.findByIdAndRemove(req.params.id);
    res.send('Product Removed successfully');
  } catch (err) {
    console.errors(err.message).json('Server Error');
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const FavItem = require('../models/FavItem');

//REQUEST GET ALL FAVITEMS
router.get('/', async (req, res) => {
  try {
    const favItems = await FavItem.find({ user: req.user.id });
    res.json(favItems);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

//REQUEST ADD NEW FAVITEM
router.post(
  '/add',
  [[check('title', 'Please enter title at least 2 character long').isLength({ min: 2 })]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { author, title, category, description } = req.body;

    try {
      const newFavItem = new FavItem({
        user: req.user.id,
        author,
        title,
        category,
        description,
      });
      const favItem = await newFavItem.save();
      res.json(favItem);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

//REQUEST FIND FAVITEM BY ID
router.get('/:id', async (req, res) => {
  try {
    const favItem = await FavItem.findById(req.params.id);
    if (!favItem) return res.status(404).json({ msg: 'FavItem not found' });
    res.json(favItem);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

//REQUEST FIND FAVITEM AND UPDATE
router.put(
  '/update/:id',
  [[check('title', 'Please enter title at least 2 character long').isLength({ min: 2 })]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { author, title, category, description } = req.body;

    const favItemFields = { author, title, category, description };
    try {
      let favItem = await FavItem.findById(req.params.id);
      if (!favItem) return res.status(404).json({ msg: 'FavItem not found' });
      favItem = await FavItem.findByIdAndUpdate(
        req.params.id,
        { $set: favItemFields },
        { new: true }
      );
      res.send(favItem);
    } catch (err) {
      console.errors(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//REQUEST FIND FAVITEM AND DELETE
router.delete('/:id', async (req, res) => {
  try {
    let favItem = await FavItem.findById(req.params.id);
    if (!favItem) return res.status(404).json({ msg: 'FavItem not found' });
    await FavItem.findByIdAndRemove(req.params.id);
    res.send('FavItem Removed successfully');
  } catch (err) {
    console.errors(err.message).json('Server Error');
  }
});

module.exports = router;

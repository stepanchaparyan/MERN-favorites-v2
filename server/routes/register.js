const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//user Model
const User = require('../models/User');

// @route POST /register
// @access Public
router.post(
  '/',
  [
    check('name', 'Please provide a name')
      .not()
      .isEmpty(),
    check('email', 'Please provide an email').isEmail(),
    check('password', 'Password at least 6 character long').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // user already exists ?
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'user already exists' });
      }
      user = new User({
        name,
        email,
        password
      });

      // password encryption
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // sign a jsonwebtoken

      jwt.sign(
        { user: { id: user.id } },
        process.env.JWT_SECRET,
        {
          expiresIn: 36000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token, userId: user.id });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;

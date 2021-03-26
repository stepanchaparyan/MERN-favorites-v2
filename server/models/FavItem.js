const mongoose = require('mongoose');

const favItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  author: {
    type: String,
    default: 'Unknown',
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: 'Other',
  },
  description: {
    type: String,
    default: 'Description',
  },
});

module.exports = mongoose.model('favItem', favItemSchema);

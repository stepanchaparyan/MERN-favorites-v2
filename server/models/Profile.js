const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    default: 'Surname',
  },
  image: {
    type: String,
    default: 'avatar.jpg',
  },
  gender: {
    type: String,
    default: '',
  },
  birthDay: {
    type: Date,
    default: new Date(),
  },
  phoneNumber: {
    type: String,
    default: '12345678',
  },
});

module.exports = mongoose.model('profile', profileSchema);

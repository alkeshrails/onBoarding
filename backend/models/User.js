const { Schema, model } = require('mongoose');

const schema = new Schema({
  username: { type: String, require: true, default: '' },
  firstName: { type: String, require: true, default: '' },
  lastName: { type: String, require: true, default: '' },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  profile: { type: String, require: true, default: '' },
  bio: { type: String, require: true, default: '' },
  bgColor: { type: String, require: true, default: 'white' },
  createdAt: { type: Date, default: Date.now() },
  updated: { type: Date, default: Date.now() },
});

module.exports = model('user', schema);

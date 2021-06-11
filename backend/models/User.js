const { Schema, model } = require('mongoose');

const schema = new Schema({
  username: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  profile: { type: String, require: true },
  bio: { type: String, require: true },
  bgColor: { type: String, require: true },
  createdAt: { type: Date, default: Date.now() },
  updated: { type: Date, default: Date.now() },
});

module.exports = model('user', schema);

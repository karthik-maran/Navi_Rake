const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id:{type:String},
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true }
  
});

const User = mongoose.model('User', userSchema);
module.exports = User;

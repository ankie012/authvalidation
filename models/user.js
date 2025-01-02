const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authtestapp')
  .then(() => console.log('Connected!'));

const createUser = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age:String,
  
});

module.exports = mongoose.model("user",createUser);



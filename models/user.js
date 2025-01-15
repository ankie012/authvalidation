const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authtestapp')
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Connection failed:', err));

// Define schemas
const createUserSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: String, required: true }
});

// const loginUserSchema = mongoose.Schema({
//   username: String,
//   password: String,
// });

// Export models with unique names
const CreateUser = mongoose.model("CreateUser", createUserSchema);
// const LoginUser = mongoose.model("LoginUser", loginUserSchema);

module.exports = {
  CreateUser
};

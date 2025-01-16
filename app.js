const express = require("express");
const app = express();
const { CreateUser }= require("./models/user");
const authenticateToken = require('./middleware/authtoke')
const cors = require('cors');


const cookieParser = require("cookie-parser");
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port = 5000;


app.use(cookieParser());
app.use(express.json());  
app.use(cors());


app.get('/dashboard', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Welcome to the home page!', user: req.user });
});


app.post('/signUp', async(req, res) => {
  const { username, email, password, age } = req.body;

  try{
    const existingUser = await CreateUser.findOne({email});
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new CreateUser({
      username,
      email,
      password: hashedPassword,
      age
    });
    await newUser.save();
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email }, 
      'yourSecretKey', // replace with a more secure key in production
      { expiresIn: '1h' }
    );
    res.status(201).json({
      message: 'User created successfully',
      token
    });
  }
  catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  // Process the received data (e.g., create the user)
  // res.send({ message: 'User created successfully' });
});

app.post('/signIn', async(req, res) => {
  
  const { username,password } = req.body;

  try{
    const existingUser = await CreateUser.findOne({username});

    if (!existingUser) {
      return res.status(401).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      'yourSecretKey', // Replace with your secret key
      { expiresIn: '1h' } // Adjust token expiration as necessary
    );

    // Step 4: Send response with the token
    return res.status(200).json({
      message: 'User signed in successfully',
      token,
    });

  } catch(error) {
    console.error('Error signing In:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  // Process the received data (e.g., create the user)
  res.send({ message: 'User Logined in successfully' });
});

console.log('hello bro ')
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

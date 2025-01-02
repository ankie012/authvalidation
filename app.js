const express = require("express");
const app = express();
const createUser = require("./models/user");


const cookieParser = require("cookie-parser");
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port = 3000;




app.use(cookieParser());
app.use(express.json());  

app.post('/createUser', (req, res) => {
  console.log('Received data:', req.body);
  // Process the received data (e.g., create the user)
  res.send({ message: 'User created successfully' });
});


console.log('hello bro ')
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

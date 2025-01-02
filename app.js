const express = require("express");
const app = express();
const createUser = require("./models/user");


const cookieParser = require("cookie-parser");
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const port = 3000;




app.use(cookieParser());

app.get('/',(req,res) => {
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

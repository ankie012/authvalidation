const cookieParser = require("cookie-parser");
var bcrypt = require('bcrypt');
const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
  const token = jwt.sign({email:"ankit@example.com"},"secret")
  res.cookie('token', token);
  // console.log(token);
  res.send('received')
});

app.get("/read",(req,res) => {
  let data = jwt.verify(req.cookies.token,"secret");
  console.log(data);
  res.send('done');
})
console.log('hello bro ')
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const cookieParser = require("cookie-parser");
var bcrypt = require('bcrypt');
const express = require("express");
const app = express();
const port = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("babybabybaby", salt, function (err, hash) {
        console.log(hash);
    });
  });
  res.send('hello')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

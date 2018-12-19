const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
var cors = require("cors");

require("./config/db");

const app = express();
app.use(cors());

const port = parseInt(process.env.PORT || 8080);

// Passport middleware
app.use(passport.initialize());
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

//app.use('/api',)

app.listen(port, () => {
  console.log("connected to localhost port:" + port);
});

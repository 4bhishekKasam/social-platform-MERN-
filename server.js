const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
var cors = require("cors");

const users = require("./routes/users");
const profile = require("./routes/profile");

require("./config/db");

const app = express();
app.use(cors());

const port = parseInt(process.env.PORT || 8080);

// Passport middleware
app.use(passport.initialize());
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

app.use("/api/users", users);
app.use("/api/profile", profile);

// Server static assets if in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.listen(port, () => {
  console.log("connected to localhost port:" + port);
});

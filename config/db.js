const mongoose = require("mongoose");

const uri = "";

mongoose
  .connect(
    uri,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("connected to database");
    },
    err => {
      console.log("error on connecting to databse");
    }
  );

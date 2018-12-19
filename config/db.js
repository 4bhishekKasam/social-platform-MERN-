const mongoose = require("mongoose");

const uri =
  "mongodb://abhi_madmax:abhi190394@cluster0-shard-00-00-dvtcn.mongodb.net:27017,cluster0-shard-00-01-dvtcn.mongodb.net:27017,cluster0-shard-00-02-dvtcn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

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

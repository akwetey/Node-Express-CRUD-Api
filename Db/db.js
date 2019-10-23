const mongoose = require("mongoose");

//connection
mongoose.connect("mongodb://localhost/Users");

mongoose.connection
  .once("open", () => {
    console.log("Connection succesful!!!!");
  })
  .on("error", error => {
    console.log(`Failed to establish connection ${error}`);
  });

module.exports = mongoose;

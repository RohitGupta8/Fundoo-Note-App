const mongoose = require("mongoose");
require("dotenv").config();

class DBconnection {
    connection = () => {
      mongoose.connect(process.env.URL, {
        useNewUrlParser: true
      }).then(() => {
        console.log("Successfully connected to the database");
      }).catch(err => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
      });
    }
}
module.exports = new DBconnection();

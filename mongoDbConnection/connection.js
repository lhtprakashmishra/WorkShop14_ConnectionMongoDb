const mongoose = require("mongoose");

const db = (uri) => {
  mongoose.connect(uri).then(() => {
    console.log("Database Connected");
  });
};

module.exports = db;

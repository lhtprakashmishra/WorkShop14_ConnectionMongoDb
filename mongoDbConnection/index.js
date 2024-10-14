const express = require("express");
const app = express();
const db = require("./connection");
const port = 3000;
const uri =
  "mongodb+srv://prakashm:Sum%40n1971@cluster0.ztoam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

db(uri);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});

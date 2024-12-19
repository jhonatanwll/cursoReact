const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

// DB Conncetion
const conn = require("./db/conn");

conn();

app.listen(3000, function () {
  console.log("Servidor Online!");
});

// DeoWHo4hrr9gJbvK

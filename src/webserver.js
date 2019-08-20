const express = require("express");
const path = require("path");

const app = express();

// console.log(path.join(__dirname, "../public"));

// publicDirectoryPath = path.join(__dirname, "../public");

// app.use(express.static(publicDirectoryPath));

app.get("/express_backend", (req, res) => {
  res.send({ creator: "Ahmet Serdar Gürbüz" });
});

app.listen(5000, () => {
  console.log("Server is up on port 5000");
});

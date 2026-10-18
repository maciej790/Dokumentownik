
const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server working on: http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`Server working on: http://localhost:${PORT}`);
});

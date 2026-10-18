
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Server working on: http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server working on: http://localhost:${PORT}`);
});


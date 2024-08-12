const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("xin chao VietNam");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

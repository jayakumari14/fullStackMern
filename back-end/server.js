const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParse.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("done");
});
app.post("/api/submit", function (req, res) {
  const { name, email } = req.body;
  console.log("received data:", { name, email });
  res.send(`name:${name} email:${email}`);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

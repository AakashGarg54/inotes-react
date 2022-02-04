const connectomongoose = require("./db");

const express = require("express");
const app = express();
const port = 5000;

app.get("/api", (req, res) => {
  res.send("Either use /auth or /notes");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
});

connectomongoose();

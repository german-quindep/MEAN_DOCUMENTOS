const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

app.use("/api/", require("./routes/archivos"));
app.listen(PORT, () => {
  console.log(`SERVER ON: ${PORT}`);
});

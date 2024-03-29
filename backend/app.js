require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const routes = require("./routes");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", routes);

app.listen(port, () => console.log(`App is running on port ${port}`));

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
require("./db");
const routes = require("./routes");
const PORT = process.env.PORT || 4000;
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
const path = require("path");
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));

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
const fs = require("fs");

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "static")));
app.use("/uploads", express.static("uploads"));
app.use(fileUpload({}));

app.use(routes);

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.listen(PORT, () => console.log(`Server has started on ${PORT}`));

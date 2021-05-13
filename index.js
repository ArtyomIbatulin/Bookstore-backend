require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./db');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));

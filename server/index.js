/* eslint-disable no-console */
const path = require('path');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
// const Promise = require('bluebird');
// const db = path

const PORT = process.env.PORT || 3001;
const PUBLIC_DIR = path.resolve(__dirname, '../public');

app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

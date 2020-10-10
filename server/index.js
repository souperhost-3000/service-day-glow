/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

require('../database-mongodb/index.js');
const { Listing } = require('../database-mongodb/index');

const app = express();
app.use(compression());

const PORT = 3001;
const PUBLIC_DIR = path.resolve(__dirname, '../public');

app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

app.get('/availability/:listing_id', (req, res) => {
  const id = Number(req.params.listing_id);
  Listing.findOne({ listing_id: id })
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

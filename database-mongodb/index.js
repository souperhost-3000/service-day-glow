/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/27017/';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connected to mongoDB and mongoose'))
  .catch((err) => console.log(err));

module.exports = db;

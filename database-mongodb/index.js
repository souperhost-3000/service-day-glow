const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/3001';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = db;

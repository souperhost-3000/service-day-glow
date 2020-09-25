/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/27017';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connected to mongoDB and mongoose'))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

// parent schema
const listingSchema = new mongoose.Schema({
  listing_id: Number,
  price: Number,
  rating: Number,
  reviews_count: Number,
  guest_limit: Number,
  guest_included: Number,
  guest_extra_charge: Number,
  cleaning_fee: Number,
  service_fee: Number,
  taxes: Number,
  availability: Array,
});

// subdocument child schema for availaility dates (by month)
const monthSchema = new mongoose.Schema({
  name: String,
  start_first: Number,
  days: Array,
});

const Listing = mongoose.model('Listing', listingSchema);
const Month = mongoose.model('Month', monthSchema);

module.exports = { db, Listing, Month };

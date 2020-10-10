/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoURI = 'mongodb://database/Availability';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to mongoDB and mongoose'))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

// subdocument child schema for availability dates (by month)
const monthSchema = new mongoose.Schema({
  name: String,
  days: Array,
});

const Month = mongoose.model('Month', monthSchema);

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
  bedrooms: Number,
  beds: Number,
  baths: Number,
  listing_type: String,
  host: String,
  availability: Array,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = { db, Listing, Month };

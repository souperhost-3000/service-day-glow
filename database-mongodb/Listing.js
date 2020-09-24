const mongoose = require('mongoose');
const db = require('./index');

mongoose.Promise = global.Promise;

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
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = { Listing };

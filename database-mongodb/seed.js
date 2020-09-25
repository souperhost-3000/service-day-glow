/* eslint-disable no-console */
const mongoose = require('mongoose');
const { db, Listing } = require('./index');

// create seeding logic to create new documents in db collection
// create math.random func to use for random number selector
// use schema to fill nums into each key:value pair
// add logic for subdoc
// once an individual document has all values, invoke .create
// use a promise .then, .catch
// consider logic for validation and save (child and parent)
// repeat with loop until 100 documents have been created
// for reviews decimal, use random(25, 50) divide by 10

// helper function for random seed data (inclusive)
const randomInt = (min, max) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

// container for 100 listing objects
const listings = [];

// main seeding logic to create new documents in Listing collection
const seedListingDocument = () => {
  for (let i = 1; i <= 2; i += 1) {
    listings.push({
      listing_id: i,
      price: randomInt(100, 900),
      rating: randomInt(25, 50) / 10,
      reviews_count: randomInt(20, 1000),
      guest_limit: randomInt(2, 6) * 2,
      guest_included: randomInt(1, 2) * 2,
      guest_extra_charge: randomInt(10, 20),
      cleaning_fee: randomInt(10, 35) * 10,
      service_fee: randomInt(20, 40),
      taxes: randomInt(15, 30),
      availability: [],
    });
  }
};

// when listings array has 100 unique objects, create each document to seed database
const seedDatabase = () => {
  Listing.create(listings)
    .then(() => mongoose.disconnect())
    .catch((err) => console.log(err));
};

seedListingDocument();
seedDatabase();

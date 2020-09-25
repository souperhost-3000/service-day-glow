const { Listing } = require('./index');

// create seeding logic to create new documents in db collection
// create math.random func to use for random number selector
// use schema to fill nums into each key:value pair
// add logic for subdoc
// once an individual document has all values, invoke .create
// use a promise .then, .catch
// consider logic for validation and save (child and parent)
// repeat with loop until 100 documents have been created

//leading 3 months and #days in month, could extend if needed
const months = {
  'October': 31,
  'November': 30,
  'December': 31,
};

// main seeding logic to create new documents in Listing collection
const seedListingDocument = () => {
  for (let i = 1; i <= 100; i += 1) {
    const listing = {
      listing_id: i,

    }
  }
}

// child seeding logic to create subdocuments for each month
const seedMonth = () => {
  for (let key in months) {
    const listingIsAvailable = [];
    //random true/false in blocks

    const month = {
      name: key,
      days: listingIsAvailable,
    }
  }
};

// helper function for random seed data
const getRandomInt = (min, max) => {
  const min = Math.ceil(min);
  const max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};


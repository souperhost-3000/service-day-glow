/* eslint-disable no-console */
const mongoose = require('mongoose');
const faker = require('faker');
// eslint-disable-next-line no-unused-vars
const { db, Listing, Month } = require('./index');

// leading 4 months, #days in month, scable if needed
const months = {
  October: 31,
  November: 30,
  December: 31,
  January: 31,
};

// listing type helper
const listingTypes = [
  'Entire house',
  'Entire apartment',
  'Entire cabin',
  'Entire chalet',
  'Entire cottage',
  'Entire treehouse',
  'Entire condominium',
  'Entire guest suite',
  'Entire townhouse',
  'Entire guesthouse',
  'Entire house',
  'Entire tiny house',
  'Hotel room',
  'Private room',
  'Shared room',
];

// helper function for random seed data (inclusive)
const randomInt = (min, max) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

// container for 100 listing objects
const listings = [];
let monthsResult = [];

// child seeding logic to create subdocuments for each month (3)
const seedMonths = () => {
  monthsResult = [];
  const monthsArr = Object.entries(months);

  monthsArr.forEach(([month, numDays]) => {
    const listingIsAvailable = [];
    while (listingIsAvailable.length < numDays) {
      let nightsInARow = randomInt(4, 10);
      const value = randomInt(1, 2) === 1 ? 1 : 0;
      while (nightsInARow > 0) {
        listingIsAvailable.push(value);
        nightsInARow -= 1;
        if (listingIsAvailable.length === numDays) {
          break;
        }
      }
    }
    monthsResult.push({
      name: month,
      days: listingIsAvailable,
    });
  });
  monthsResult = monthsResult.map((month) => new Month(month));
};

// main seeding logic to create new documents in Listing collection
const seedListingDocument = () => {
  for (let i = 1; i <= 100; i += 1) {
    seedMonths();
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
      bedrooms: randomInt(0, 5),
      beds: randomInt(1, 5),
      baths: randomInt(1, 5),
      listing_type: listingTypes[randomInt(0, 14)],
      host: faker.name.firstName(),
      availability: monthsResult,
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

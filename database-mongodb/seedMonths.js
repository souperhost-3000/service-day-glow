/* eslint-disable no-console */
const mongoose = require('mongoose');
const { db, Month } = require('./index');

// leading 3 months, #days in month, scable if needed
const months = {
  October: 31,
  November: 30,
  December: 31,
};

// helper function for random seed data (inclusive)
const randomInt = (min, max) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

// child seeding logic to create subdocuments for each month (3)
const seedMonths = () => {
  const monthsArr = Object.entries(months);
  const monthsResult = [];

  monthsArr.forEach((month) => {
    const listingIsAvailable = [];
    // fill days with boolean, number of days in that month
    // for (let i = 0; i < month[1]; i += 1) {
    //   // need to add logic for blocks of trues & falses (4-10)
    //   randomInt(1, 2) === 1 ? listingIsAvailable.push(true) : listingIsAvailable.push(false);
    // }
    while (listingIsAvailable.length < month[1]) {
      const nightsInARow = randomInt(4, 10);
      const value = randomInt(1, 2) === 1 ? 1 : 0;
      while (nightsInARow > 0) {
        listingIsAvailable.push(value);
      }
    }

    monthsResult.push({
      name: month[0],
      days: listingIsAvailable,
    });
  });

  return Month.create(monthsResult)
    .then(() => mongoose.disconnect())
    .catch((err) => console.log(err));
};

seedMonths();

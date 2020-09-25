const { Listing } = require('./index');

// create seeding logic to create new documents in db collection
// create math.random func to use for random number selector
// use schema to fill nums into each key:value pair
// once an individual document has all values, invoke .create
// use a promise .then, .catch
// repeat with loop until 100 documents have been created

for (let i = 1; i <= 100; i += 1) {
  const listing = {
    listing_id: i,

  }
}
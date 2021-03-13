## Planning via mock ups
![](./../img/front.png)
![](./../img/calendar.png)
![](./../img/guests.png)
![](./../img/estimate.png)

## Whiteboarding UI to database
![](./../img/calendar_whiteboarding.png)

## MongoDB shape of data
Document schema sample:
```
listingSchema = {
    “listing_id”: 1,
    “price”: 100,
    “rating”: 4.5,
    “reviews_count”: 86,
     “guests_limit”: 8,
     “guests_included”: 2,
     “guest_extra_charge”: 10,
     “cleaning_fee”: 100,
     “service_fee”: 71,
     “taxes”: 51,
	“bedrooms”: 4,
	“beds”: 4,
	“bath”: 2,
	“listing_type”: Entire house,
	“host”: random name,
     “availability”: [monthSchema],
}
```

Subdocument child schema sample:
```
monthSchema = {
   name: String (i.e. October),
   days : [ 1, 1, 1, … 0 ]
}
```
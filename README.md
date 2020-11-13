[![Souperhost:3000](https://circleci.com/gh/souperhost-3000/service-day-glow.svg?style=shield)](https://github.com/souperhost-3000/service-day-glow/)

# Hi, I'm Jacki
<img align='right' src='https://media.giphy.com/media/bcKmIWkUMCjVm/giphy.gif' width='200"'>
I love coding, spreading positivity and hearing feedback! Feel free to connect, send feedback or submit a PR with really cool ideas :)

## Check Availability Calendar aka service-day-glow
This service focuses on the "Check Availability Calendar" of a producting listing page for a home rental site. It operates with it's own server and database that powers the module's UI.  It is one service of a larger service oriented architecture.

<img scr="//imgur.com/a/HC0EEhw">

## Getting Started

Clone the Github repository:
* `$ git clone https://github.com/souperhost-3000/service-day-glow.git`

Navigate inside of the directory `./service-day-glow` and run the following commands:
1. `$ npm install`
2. `$ npm run build`
3. `$ npm start`

Open a new browser tab to see the app:
* `http://localhost:3001`


## Related Projects

  - https://github.com/souperhost-3000/service-eric
  - https://github.com/souperhost-3000/service-chris
  - https://github.com/souperhost-3000/service-dannyhannyford

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Using the check availability calendar service
Enjoy this single page app that is part of a larger service oriented architecture. If you want to play with the front end UI, navigate to the localhost:3001 and click around.  It is very intuitive and you may even find it quite similar to Airbnb's reservation flow.

If you'd like to dive more in depth with reservation and different dummy data for lisitings, run the command to seed a MongoDB and connect to the service:
1. `$ npm run seed`

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node >= 6.13.0
- etc

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Built With
* React
* Node.js
* Express
* MongoDB
* Mongoose
* Wepack
* Docker
* AWS EC2 (currently not live)

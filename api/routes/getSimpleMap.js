const express = require('express');
// const fetch = require('node-fetch');

const router = express.Router();
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=Space+Needle,Seattle+WA`;

// router.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

router.get('/', async (req, res) => {
  console.log('getSimpleMap route was called');
  const mapFetch = await fetch(mapUrl);
  await res
    // .header('Access-Control-Allow-Origin', 'http://localhost:3000')
    // .header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    .send(mapFetch);
});

module.exports = router;

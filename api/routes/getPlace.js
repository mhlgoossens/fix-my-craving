const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const apiKey = `&key=${process.env.API_KEY}`;

// https://fetch.spec.whatwg.org/#fetch-api
router.get('/', async (req, res) => {
  const fetchBase = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json?');

  // build fetch url from query
  Object.keys(req.query).forEach((key) => fetchBase.searchParams.append(key, req.query[key]));
  const urlWithKey = fetchBase.href.concat('', apiKey);

  // fetch, log result
  const search = await fetch(urlWithKey)
    .then((result) => result.json());
  console.log(search);

  // send specific result back
  res.send(search.results[0].geometry.location);
});

module.exports = router;

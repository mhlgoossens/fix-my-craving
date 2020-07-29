const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Testing first API route, backend talking to you!');
});

module.exports = router;

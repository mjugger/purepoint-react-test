const express = require('express');
const router = express.Router();
const request = require('request');

router.post('/recipecontains', (req, res) => {
  const { text } = req.body;
  request({
    uri: 'http://www.recipepuppy.com/api',
    qs: {
      q: text
    }
  }).pipe(res);
});

module.exports = router;

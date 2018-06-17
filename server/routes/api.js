const express = require('express');
const router = express.Router();
const os = require('os');

const helloWorld = `hello world, this is a message from the server. your server OS is: ${os.platform()}`;

router.get('/helloworld', (req, res) => {
  res.status(200).json({ helloWorld })
});

module.exports = router;

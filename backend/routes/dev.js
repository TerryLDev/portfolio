const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Home Page
  res.send("<h1>Hello</h1>")
})

module.exports = router;
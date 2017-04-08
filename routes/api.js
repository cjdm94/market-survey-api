const express = require('express');
const router = express.Router();

router.get('/surveys', (req, res, next) => {
  res.send('Here are some surveys matching your search criteria.');
});

module.exports = router;
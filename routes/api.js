const express = require('express');
const router = express.Router();
const Survey = require('../models/surveys');

router.get('/surveys', (req, res, next) => {
  res.send('Here are some surveys matching your search criteria.');

	Survey.getAllSurveys((err, surveys) => {
		if (!err) {
			console.log(surveys);
		} else {
			console.log(err);
		}
	});

});

module.exports = router;

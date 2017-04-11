const express = require('express');
const router = express.Router();
const Survey = require('../models/surveys');

function handleResult(res, err, surveys) {
	if(!err) {
		if(s)
		res.json(surveys);
	} else {
		console.log(err);
	}
}

router.get('/surveys/all', (req, res, next) => {
	Survey.getAllSurveys((err, surveys) => {
		handleResult(res, err, surveys);
	});
});

router.get('/surveys/sector/:sector', (req, res, next) => {
	const sector = req.params.sector;
	Survey.getSurveysBySector(sector, (err, surveys) => {
		handleResult(res, err, surveys);
	});
});

router.get('/surveys/age-group/:ageGroup', (req, res, next) => {
	const ageGroup = req.params.ageGroup;
	Survey.getSurveysByAgeGroup(ageGroup, (err, surveys) => {
		handleResult(res, err, surveys);
	});
});

router.get('/surveys/country/:country', (req, res, next) => {
	const country = req.params.country;
	Survey.getSurveysByCountry(country, (err, surveys) => {
		handleResult(res, err, surveys);
	});
});

router.get('/surveys/year/:year', (req, res, next) => {
	const year = req.params.year;
	Survey.getSurveysByYear(year, (err, surveys) => {
		handleResult(res, err, surveys);
	});
});

module.exports = router;

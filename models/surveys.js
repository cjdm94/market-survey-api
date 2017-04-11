const mongoose = require('mongoose');
const config = require('../config/database');

const SurveySchema = mongoose.Schema({
	sector: {
		type: String
	},
	ageGroup: {
		type: String
	},
	country: {
		type: String
	},
	year: {
		type: String
	},
	url: {
		type: String
	}
});

const Survey = module.exports = mongoose.model('surveys', SurveySchema);

module.exports.getAllSurveys = function(callback) {
	Survey.find({}, callback);
}

module.exports.getSurveysBySector = function(sector, callback) {
	Survey.find({'sector': sector}, callback);
}

module.exports.getSurveysByAgeGroup = function(ageGroup, callback) {
	Survey.find({'ageGroup': ageGroup}, callback);
}

module.exports.getSurveysByCountry = function(country, callback) {
	Survey.find({'country': country}, callback);
}

module.exports.getSurveysByYear = function(year, callback) {
	Survey.find({'year': year}, callback);
}

module.exports.filterSurveys = function(queryObject, callback) {
	Survey.find(queryObject, callback);
}

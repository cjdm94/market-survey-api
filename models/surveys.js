const mongoose = require('mongoose');
const config = require('../config/database');

const SurveySchema = mongoose.Schema({
	sector: {
		type: String
	},
	targetAgeGroup: {
		type: String
	},
	countrySurveyed: {
		type: String
	},
	yearConducted: {
		type: String
	},
	resultsUrl: {
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
	Survey.find({'targetAgeGroup': ageGroup}, callback);
}

module.exports.getSurveysByCountry = function(country, callback) {
	Survey.find({'countrySurveyed': country}, callback);
}

module.exports.getSurveysByYear = function(year, callback) {
	Survey.find({'yearConducted': year}, callback);
}

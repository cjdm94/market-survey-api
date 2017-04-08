const mongoose = require('mongoose');
const config = require('../config/database');

const SurveySchema = mongoose.Schema({
	sector: {
		type: String
	},
	keywords: {
		type: Array
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
	conductedBy: {
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

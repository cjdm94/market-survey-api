const express = require('express');
const router = express.Router();

// Import any api-specific controllers here
const SurveyController = require('../controllers/SurveyController');

// Append controller routes to the '/api' endpoint here
router.use('/surveys', SurveyController); // Requests to '/api/surveys' => SurveyController, and its respective routes

module.exports = router;

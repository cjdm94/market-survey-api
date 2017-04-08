const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app  = express();
const api  = require('./routes/api');
const port = 3000;

// All requests to /api/* will be mapped to the routes/api file, which contains api-specific routes
app.use('/api', api);

// Parses the body of an incoming request as JSON, and exposes it on req.body - easy to interface with
app.use(bodyParser.json());

// Set the 'public' directory as the home of the application's static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log('Server listening on port '+port);
});

app.get('/', (res, req) => {
	res.render('index');
})
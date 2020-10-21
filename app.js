const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require('cors');

var bodyParser = require('body-parser');

// Include all routes
const leaderboardRoutes = require("./api/routes/leaderboards");

// Connect to the MONGODB database
mongoose.connect('mongodb+srv://HetSheldor:PASS@42@cluster-asteroid.hm7la.mongodb.net/ASTEROID?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// CORS: Cross Origin Resource Sharing: Make sure that the app returns the required header to allow direct access
// Specify restrictions in cors as a JSON object
app.use(cors());

// The new version of express needs to be told to use the body parses in explicit form
app.use(bodyParser.json());

// Include all the routes of the application
app.use("/leaderboards", leaderboardRoutes);

module.exports = app;
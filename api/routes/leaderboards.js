const express = require('express');
const router = express.Router();

// Database schema
const Leaderboard = require('../models/leaderboard');

var bodyParser = require('body-parser')
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
var jsonParser = bodyParser.json();

router.post('/', urlencodedParser, function(req, res) {
    const newscore = new Leaderboard({
        score: req.body.score,
        username: req.body.username,
        motto: req.body.motto
    });
    newscore.save().then(() => {
        console.log('Saved new score: ' + newscore);
    }).catch(error => {
        console.log(error);
    });
    // Respond back with the sent object for validation.
    res.send(newscore);
});

router.get('/', jsonParser, function(req, res) {
    // Retreive all tuples of scores from the database
    Leaderboard.find({}, function (err, scores) {
        if (err) return handleError(err);
        console.log('Sending back all the scores');
        res.send(scores);
    });
});

module.exports = router;
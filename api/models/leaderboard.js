const mongoose = require('mongoose');

// Defining a simple schema model for the API to use

/**
 * This represents a single score containing information about the player and the relevant score
 */
const leaderboardSchema = mongoose.Schema({
    score: Number,
    username: String,
    motto: String
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);
const mongoose = require('mongoose');

const LeaderBoardSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    debtsOwed: {
        type: Number
    },
    creditsOwed: {
        type: Number
    },
    debtsCompleted: {
        type: Number
    },
    creditsCompleted: {
        type: Number
    },
    websiteActions: {
        type: Number
    }
});

module.exports = mongoose.model('LeaderBoard', LeaderBoardSchema);
const mongoose = require('mongoose');

const FavourSchema = mongoose.Schema({
    favourID: {
        type: String,
        required: true
    },
    creditor: {
        type: String,
        required: true
    },
    debtor: {
        type: String,
        required: true
    },
    description: String,
    createdOn: {
        type: Date,
        default: Date.now,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    repaid: {
        type: Boolean,
        default: false
    },
    repaidOn: {
        type: Date
    },
    reward: {
        type: [String]
    },
    public: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Favour', FavourSchema);
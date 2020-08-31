const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    item: {
        type: String,
        require: true
    },
    price: Number,
    healthy: Boolean
});

module.exports = mongoose.model('list', listSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    vote: {
        type: Boolean,
        required: "Le nom est requis"
    },
    post_id: {
        type: String
    }
});

module.exports = mongoose.model('Vote', voteSchema);
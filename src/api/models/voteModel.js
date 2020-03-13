const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
  
  post_id: {
    type: String
  },
  Number: {
    type: Boolean,
    default : 0,
    require : false,
  }
});

module.exports = mongoose.model('Votes', voteSchema);

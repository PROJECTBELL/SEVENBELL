const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {
    type: String,
    required: "Le titre est requis"
  },
  content: {
    type: String,
    required: "Le contenu est requis"
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  Numbers: {
    type: Number,
    validate : {
      validator : Number.isInteger,
      message : '{VALUE} is not an integer'
    }
  }
});

module.exports = mongoose.model('Post', postSchema);

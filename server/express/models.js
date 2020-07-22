const mongoose = require('./db');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  question: { type: String, default: 0 },
  timestamp: Number
});

const questionSchema = new Schema({
  question: { type: String},
  username: String,
  timestamp: Number,
  votes:{ type: Number, default: 0 }
});

const Poll = mongoose.model('Poll', pollSchema);
const Question = mongoose.model('Question', questionSchema);
module.exports = { Poll, Question };

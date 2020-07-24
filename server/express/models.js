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
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  isPublic: Boolean
});

const Poll = mongoose.model('Poll', pollSchema);
const Question = mongoose.model('Question', questionSchema);
module.exports = { Poll, Question };

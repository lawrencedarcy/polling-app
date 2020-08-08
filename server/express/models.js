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
  answer1: {value: String, votes: {type: Array, default: []}},
  answer2: {value: String, votes: {type: Array, default: []}},
  answer3: {value: String, votes: {type: Array, default: []}},
  answer4: {value: String, votes: {type: Array, default: []}},
  isPublic: Boolean
});

const Poll = mongoose.model('Poll', pollSchema);
const Question = mongoose.model('Question', questionSchema);
module.exports = { Poll, Question };

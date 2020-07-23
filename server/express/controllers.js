const {Poll, Question} = require('./models');
const mongoose = require('./db');


const getPolls = async (req, res) => {
  console.log('get request received!'); // eslint-disable-line
  try {
    const polls = await Poll.find();   
    res.json(polls);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addPoll = async (req, res) => {
  
  console.log(req.body);// eslint-disable-line
  const poll = new Poll(
    {
      question: req.body.question,
      timestamp: Date.now(),
    }
  );
  try {
    const newPoll = await poll.save();
    res.status(201).json(newPoll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  
};

const getQuestions = async (req, res) => {
  console.log('get request received!'); // eslint-disable-line
  try {
    const questions = await Question.find();   
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addQuestion = async (req, res) => {
  
  console.log(req.body);// eslint-disable-line
  const question = new Question(
    {
      question: req.body.question,
      username: req.body.username,
      timestamp: Date.now(),
      answer1: req.body.answer1,
      answer2: req.body.answer2,
      answer3: req.body.answer3,
      answer4: req.body.answer4
    }
  );
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  
};



const upVote = async (req, res) => {
  try {
    const upVoted = await Question.findOneAndUpdate({_id: req.params.id}, { $inc: { votes: 1}});
    res.status(200).json(upVoted); 
  } catch (err) {
    res.status(500).json({ message: err.message }); 
  }
};


module.exports = {
  getPolls,
  addPoll,
  getQuestions,
  addQuestion,
  upVote,
}; 



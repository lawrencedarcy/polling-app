const express = require('express');

const router = express.Router();
const { getPolls, addPoll, getQuestions, addQuestion, upVote } = require('./controllers');


router.get('/polls', getPolls);
router.post('/polls', addPoll);
router.get('/questions', getQuestions);
router.post('/questions', addQuestion);
router.put('/questions/:id/up', upVote);
 

module.exports = router;
import React from 'react';
import './Feed.css';
import Poll from '../Poll/Poll';
import CreatePoll from '../CreatePoll/CreatePoll';

function Feed({ questions, addPoll }) {
  console.log(questions);
  return (
    <div className='feed-wrapper'>
      <CreatePoll addPoll={addPoll}/> 
   {questions &&
        questions.map(question => <Poll question={question} key={question._id}/>)}
    </div>
  );
}

export default Feed;

import React from 'react';
import './Feed.css';
import Poll from '../Poll/Poll';



function Feed({questions}) {
  console.log(questions);
  return (
    <div className='feed-wrapper'>
      
    {questions &&
        questions.map(question => <Poll question={question} key={question._id}/>)} 
    </div>
  );
}

export default Feed;

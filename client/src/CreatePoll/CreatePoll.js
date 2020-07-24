import React, { useState } from 'react';
import './CreatePoll.css';

function CreatePoll({ addPoll }) {
  const [checked, setChecked] = useState(true);

  const initialFormState = {
    question: '',
    username: '',
    answer1: '',
    answer2: '',
    answer3: '', 
    answer4: '',
    isPublic: true
  };
  const [question, setQuestion] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleCheckChange = () => {
    setChecked(!checked);

    setQuestion({ ...question, isPublic: !checked });
  };

  const submitQ = event => {
    event.preventDefault();
    addPoll(question);
    setQuestion(initialFormState);
  };

  return (
    <div className='questionform-wrapper'>
      <form className='questionform' onSubmit={submitQ}>
        <label className='questionform-label'>Username</label>
        <input
          className='questionform-input'
          type='text'
          name='username'
          value={question.username}
          onChange={handleInputChange}
        />
        <label className='questionform-label'>Question</label>
        <input
          className='questionform-input'
          type='text'
          name='question'
          value={question.question}
          onChange={handleInputChange}
        />
        <label className='questionform-label'>Answer one:</label>
        <input
          className='questionform-input'
          type='text'
          name='answer1'
          value={question.answer1}
          onChange={handleInputChange}
        />
        <label className='questionform-label'>Answer two:</label>
        <input
          className='questionform-input'
          type='text'
          name='answer2'
          value={question.answer2}
          onChange={handleInputChange}
        />
        <label className='questionform-label'>Answer three:</label>
        <input
          className='questionform-input'
          type='text'
          name='answer3'
          value={question.answer3}
          onChange={handleInputChange}
        />
        <label className='questionform-label'>Answer four:</label>
        <input
          className='questionform-input'
          type='text'
          name='answer4'
          value={question.answer4}
          onChange={handleInputChange}
        />
        <label className='questionform-label'>Make public?</label>
        <input
          type='checkbox'
          name='isPrivate'
          onChange={handleCheckChange}
          checked={checked}
        />
        <button className='questionform-btn'>Submit question</button>
      </form>
    </div>
  );
}

export default CreatePoll;

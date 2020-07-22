import React, { useState } from 'react';
import './QuestionForm.css';

function QuestionForm({addQuestion}) {
  const initialFormState = { question: '', username: '' };
  const [question, setQuestion] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setQuestion({ ...question, [name]: value });
  };

  const submitQ = (event) => {
    event.preventDefault();
    addQuestion(question);
    setQuestion(initialFormState );
  };

  return (
    <div className='questionform-wrapper'>
      <form onSubmit={submitQ}>
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
        <button className='questionform-btn'>Submit question</button>
      </form>
    </div>
  );
}

export default QuestionForm;

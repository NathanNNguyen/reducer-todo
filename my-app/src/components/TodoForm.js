import React, { useState } from 'react';

export default function TodoForm({ dispatch }) {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleRemove = e => {
    e.preventDefault();
    dispatch({ type: "remove", payload: text })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'add', payload: text });
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='todoText' onChange={handleChange} value={text} />
      <button type='submit' >Add</button>
      <button onClick={handleRemove}>Remove</button>
    </form>
  )
}
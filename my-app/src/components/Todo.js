import React from 'react';
import '../App.css';
import './style.css';

const Todo = ({ item, onToggle }) => {
  return (
    <div className={`todo${item.completed ? " completed" : ""}`} onClick={onToggle} key={item.id}>
      <p>{item.item}</p>
    </div>
  );
}

export default Todo;
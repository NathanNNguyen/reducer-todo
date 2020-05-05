import React from 'react';
import Todo from './Todo';

export default function TodoList({ list, dispatch }) {
  // console.log(list)
  return (
    <div>
      {list.map(item => (
        <Todo
          key={item.id}
          item={item}
          onToggle={() => dispatch({ type: "toggle", payload: item.id })}
        />
      ))}
    </div>
  )
}
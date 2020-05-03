import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div>
        <p>why no update</p>
        <p>{props.text}</p>
    </div>
  );
}

export default TaskItem;
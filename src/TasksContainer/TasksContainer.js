import React from 'react';
import './TasksContainer.css';
import TaskItem from './TaskItem/TaskItem';

function TasksContainer() {
  return (
    <div className="container col-12 col-md-6 col-lg-4 col-xl-3 align-self-end task-box">
        <TaskItem text='task one jhbfdjhd'/>
        <TaskItem/>
        <h2>2 Task(s)</h2>
    </div>
  );
}

export default TasksContainer;
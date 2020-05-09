import React from 'react';
import './TasksContainer.css';
import TaskItem from '../TaskItem/TaskItem';

let taskItems = 0;

function TasksContainer(taskContainer) {
  return (
    <div className="container col-12 col-md-6 col-lg-4 col-xl-3 align-self-end task-box">
        <TaskItem text='task one text here' deadline='5 days' isCompleted='false'/>
        <TaskItem text='task 17 text here' deadline='0 days!' isCompleted='false'/>
        <TaskItem text='task forty text here' isCompleted='true'/>
        <h2>{taskItems} Task(s)</h2>
    </div>
  );
}

export default TasksContainer;
import React from 'react';
import './TasksContainer.css';
import TaskItem from '../TaskItem/TaskItem';





function TasksContainer(props) {

  let taskItems = 0;

  let tTasks = [];

  function getTasks(props) {

    let tasksHTML = '';

    // defines and populates the tasks
    for (let i = 0; i < props.length; i++) {
      tTasks.push(); // can eventually add an if here to separate bs and ns. for now, 1 array.
    }

    // returns the correctly formatted html to define the bottles
    for (let i = 0; i < tTasks; i++) {
      tasksHTML += <TaskItem text={tTasks[i].text} isCompleted={tTasks[i].isCompleted} taskID={tTasks[i].taskID}/>;
    }
    return <TaskItem text={tTasks.text} isCompleted={tTasks.isCompleted} taskID={tTasks.taskID}/>
    return tasksHTML; // needs to return a bottle component with tasks
  }


  return (
    <div className="container col-12 col-md-6 col-lg-4 col-xl-3 align-self-end task-box">
        {getTasks(props)}
        <h2>{taskItems} Task(s)</h2>
    </div>
  );
}

export default TasksContainer;
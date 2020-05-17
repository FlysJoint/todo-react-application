import React from 'react';
import './Bottle.css';
import TaskItem from '../TaskItem/TaskItem';

function Bottle(props) {

  let taskItems = props.bottleTasks.length;

  function getTasks(props) {

    //let bottleTitles = [];
    let taskHTML = [];

    // defines whether a task is b or n, implement later unshift with one, push with t'other
    // for (let i = 0; i < props.shelfTasks.length; i++) {
    //   if (bottleTitles.includes(props.shelfTasks[i].bottle) === false) {
    //     bottleTitles.push(props.shelfTasks[i].bottle);
    //   }
    // }
    //let bTasks = new Array(bottleTitles.length);

    // sorts the tasks into the relevant shelf
    for (let i = 0; i < props.bottleTasks.length; i++) { // don't use taskIems here because you'll probably alter it with complete/incomplete later
      taskHTML.push(
      <TaskItem 
        key={props.bottleTasks[i].taskID} 
        text={props.bottleTasks[i].text} 
        completed={props.bottleTasks[i].isCompleted} 
        taskID={props.bottleTasks[i].taskID} 
        deadline={props.bottleTasks[i].deadline}
        deleteTask={ props.deleteTask }
        completeTask={ props.completeTask }
      />);
    }
    return <div>{taskHTML}</div>;
  }

  return (
    <div className="container col-12 col-md-6 col-lg-4 col-xl-3 align-self-end bottle">
        {getTasks(props)}
        <h2>{taskItems > 1 ? `${taskItems} tasks` : '1 task'}</h2>
    </div>
  );
}

export default Bottle;
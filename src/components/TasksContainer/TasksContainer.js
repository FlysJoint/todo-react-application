import React from 'react';
import './TasksContainer.css';
import TaskItem from '../TaskItem/TaskItem';

function TasksContainer(props) {

  let taskItems = props.bottleTasks.length;

  // function getTasks(props) {

  //   let bottleTitles = [];
  //   let bottleHTML = [];

  //   // defines the required shelf amount and puts the shelf names in an array
  //   for (let i = 0; i < props.shelfTasks.length; i++) {
  //     if (bottleTitles.includes(props.shelfTasks[i].bottle) === false) {
  //       bottleTitles.push(props.shelfTasks[i].bottle);
  //     }
  //   }
  //   let bTasks = new Array(bottleTitles.length);

  //   // sorts the tasks into the relevant shelf
  //   for (let i = 0; i < bottleTitles.length; i++) {
  //     bTasks[i] = props.shelfTasks.filter(x => x.bottle === bottleTitles[i]);
  //     bottleHTML.push(<TasksContainer bottleTasks={bTasks[i]}/>);
  //   }
  //   return <div>{bottleHTML}</div>;
  // }

  return (
    <div className="container col-12 col-md-6 col-lg-4 col-xl-3 align-self-end task-box">
        {/* <TaskItem text={props.bottleTasks[0].text}/>
        <TaskItem text={props.bottleTasks[1].text}/>
        <TaskItem text={props.bottleTasks[2].text}/> */}
        <TaskItem text={props.bottleTasks[0].text}/>
        <h2>{taskItems} Task(s)</h2>
    </div>
  );
}

export default TasksContainer;
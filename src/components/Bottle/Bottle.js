import React from 'react';
import './Bottle.css';
import TaskItem from '../TaskItem/TaskItem';
import AddTask from '../AddTask/AddTask';

import addIcon from '../../icons/addIcon.svg'

function Bottle(props) {

  let taskItems = props.bottleTasks.length;

  function getTasks(props) {

    //let bottleTitles = [];
    let taskHTML = [];

    // add task button needs to be added here so it's between push and unshifts
    taskHTML.push(
      <AddTask 
        myShelf ={ props.myShelf }
        myBottle={ props.myBottle } 
        addTask={ props.addTask }
      />);
    // taskHTML.push(
    //   <button 
    //     type="button" className="col-12 btn" id="outline"
    //     data-toggle="tooltip" data-placement="right" title="Add task" onClick={ () => props.addTask() }>
    //     <img src={ addIcon } alt='' className='add-svg'/>
    //   </button>);

    // sorts the tasks into the relevant position
    for (let i = 0; i < props.bottleTasks.length; i++) {
      switch (props.bottleTasks[i].pos) {
        case 0:
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
            break;
        case 1:
          taskHTML.unshift(
            <TaskItem 
              key={props.bottleTasks[i].taskID} 
              text={props.bottleTasks[i].text} 
              completed={props.bottleTasks[i].isCompleted} 
              taskID={props.bottleTasks[i].taskID} 
              deadline={props.bottleTasks[i].deadline}
              deleteTask={ props.deleteTask }
              completeTask={ props.completeTask }
            />);
          break;
        default:
          console.log('invalid pos: ' + props.taskID);
          break;
      }
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
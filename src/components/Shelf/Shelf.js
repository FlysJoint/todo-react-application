import React from 'react';
import './Shelf.css';
import TasksContainer from '../TasksContainer/TasksContainer';

function Shelf(props) {

  function getBottleTasks(props) {

    let bottleTitles = [];
    let bottleHTML = [];

    // defines the required bottle amount and puts the bottle numbers in an array
    for (let i = 0; i < props.shelfTasks.length; i++) {
      if (bottleTitles.includes(props.shelfTasks[i].bottle) === false) {
        bottleTitles.push(props.shelfTasks[i].bottle);
      }
    }
    let bTasks = new Array(bottleTitles.length);

    // sorts the tasks into the relevant bottle
    for (let i = 0; i < bottleTitles.length; i++) {
      bTasks[i] = props.shelfTasks.filter(x => x.bottle === bottleTitles[i]);
      bottleHTML.push(<TasksContainer bottleTasks={bTasks[i]}/>);
    }
    return <div>{bottleHTML}</div>;
  }

  return (
    <div>
        <div className="container screen">
            <div className="row" id="nowrap">
              {getBottleTasks(props)}
              {/* <TasksContainer/> */}
            </div>
        </div>
        <div className = "row shelf" id="nowrap"></div>
    </div>
  );
}

export default Shelf;
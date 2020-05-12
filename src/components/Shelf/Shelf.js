import React from 'react';
import './Shelf.css';
import TasksContainer from '../TasksContainer/TasksContainer';

function Shelf(props) {

  function getBottleTasks(props) {

    let bottleTitles = [];
    let bottlesHTML; // just outside function for debug. put it back if you can

    // defines the required shelf amount and puts the shelf names in an array
    for (let i = 0; i < props.length; i++) {
      if (bottleTitles.includes(props[i].bottle) === false) {
        bottleTitles.push(props[i].bottle);
      }
    }

    let bTasks = new Array(bottleTitles.length);
    //console.log(bTasks);

    for (let i = 0; i < bottleTitles.length; i++) {
      bTasks[i] = Object.values(props).filter(x => x.bottle === bottleTitles[i]);
      bottlesHTML = <TasksContainer props/>;
    }
    console.log(bTasks);
    console.log(bottlesHTML);

    return <div>{bottlesHTML}</div>;
    // i want to have a shelf per inner array
  }

  return (
    <div>
        <div className="container screen">
            <div className="row" id="nowrap">
              {getBottleTasks(props)}
              <TasksContainer props/>
            </div>
        </div>
        <div className = "row shelf" id="nowrap"></div>
    </div>
  );
}

export default Shelf;
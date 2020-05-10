import React from 'react';
import './Shelf.css';
import TasksContainer from '../TasksContainer/TasksContainer';

function Shelf(props) {

  let bTasks = [];

  function getBottleTasks(props) {

    let bottlesHTML = '';

    // defines and populates the bottles
    for (let i = 0; i < props.length; i++) {
      if (props.bottle === i) bTasks[i].push();
    }

    // returns the correctly formatted html to define the bottles
    for (let i = 0; i < bTasks; i++) {
      bottlesHTML += <TasksContainer bottleTasks={`${bTasks[i]}`}/>;
    }
    return <TasksContainer bottleTasks={``}/>
    return bottlesHTML; // needs to return a bottle component with tasks
  }

  return (
    <div>
        <div className="container screen">
            <div className="row" id="nowrap">
              {getBottleTasks(props)}
            </div>
        </div>
        <div className = "row shelf" id="nowrap"></div>
    </div>
  );
}

export default Shelf;
import React from 'react';
import './Shelf.css';
import Bottle from '../Bottle/Bottle';

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
      bottleHTML.push(<Bottle key={props.shelfTasks[i].taskID} bottleTasks={bTasks[i]} deleteTask={ props.deleteTask } text={props.shelfTasks[i].shelf}/>);
    }
    return <div className="row" id="nowrap">{bottleHTML}</div>;
  }

  return (
    <div>
        <div className="container screen">
            {getBottleTasks(props)}
        </div>
        <div className = "row shelf" id="nowrap">shelf name justify me</div>
    </div>
  );
}

export default Shelf;
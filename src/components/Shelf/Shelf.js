import React from 'react';
import './Shelf.css';
import Bottle from '../Bottle/Bottle';
import { v4 as uuidv4 } from 'uuid';

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
      bottleHTML.push(
        <Bottle 
          key={ uuidv4() } // change this to shelf?
          bottleTasks={bTasks[i]} 
          deleteTask={ props.deleteTask } 
          completeTask={ props.completeTask } 
          addTask={ props.addTask }
          text={props.shelfTasks[i].shelf}
          myShelf = { props.myShelf }
          myBottle = { bottleTitles[i] }
        />);
    }
    return <div className="row" id="nowrap">{bottleHTML}</div>;
  }

  return (
    <div>
        <div className="container screen">
            {getBottleTasks(props)}
        </div>
        <div className = "row shelf" id="nowrap">{ props.myShelf }</div>
    </div>
  );
}

export default Shelf;
import React, { useState } from 'react';
import './App.css';
import Shelf from './components/Shelf/Shelf';

function App() {

  // destructuring method
  const [tasks, setTasks] = useState([
    { text: 'Fly to Mars', isCompleted: true, shelf: 'morning', bottle:1,  taskID: 1, deadline: 4 },  /*an array instead with a b/n bool*/
    { text: 'Get marooned', isCompleted: false, shelf: 'morning', bottle:1,  taskID: 3 , deadline: 0}, // rearrange the order of the properties to be tidier
    { text: 'Grow spuds from poo', isCompleted: false, shelf: 'morning', bottle:1,  taskID: 2, deadline: 2},
    { text: 'Walk cats', isCompleted: true, shelf: 'afternoon', bottle:2,  taskID: 4, deadline: 11},
    { text: 'Wash dinner', isCompleted: true, shelf: 'afternoon', bottle:1,  taskID: 5, deadline: 7},
    { text: 'Dress dog', isCompleted: false, shelf: 'afternoon', bottle:1,  taskID: 6 }, // needs to handle no deadline
    { text: 'Walk kids', isCompleted: true, shelf: 'afternoon', bottle:1,  taskID: 7, deadline: 8},
    { text: 'Watch Alien', isCompleted: false, shelf: 'evening', bottle:1,  taskID: 8, deadline: 24},
    { text: 'Watch Aliens', isCompleted: true, shelf: 'evening', bottle:1,  taskID: 9, deadline: 365},
    { text: 'Go to bed', isCompleted: false, shelf: 'evening', bottle:2, taskID: 10, deadline: 1}
  ]);

  function getShelfTasks(tasks) {

    let shelfTitles = [];
    let shelvesHTML = [];

    // defines the required shelf amount and puts the shelf names in an array
    for (let i = 0; i < tasks.length; i++) {
      if (shelfTitles.includes(tasks[i].shelf) === false) {
        shelfTitles.push(tasks[i].shelf);
      }
    }
    let sTasks = new Array(shelfTitles.length);

    // sorts the tasks into the relevant shelf
    for (let i = 0; i < shelfTitles.length; i++) {
      sTasks[i] = Object.values(tasks).filter(x => x.shelf === shelfTitles[i]);
      shelvesHTML.push(<Shelf shelfTasks={sTasks[i]}/>);
    }
    return <div>{shelvesHTML}</div>;
  }

  return (
    <div className="App">
      {getShelfTasks(tasks)}
      {/* <Shelf/> */}
    </div>
  );
}

export default App;

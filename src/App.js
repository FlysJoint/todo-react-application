import React, { useState } from 'react';
import './App.css';
import Shelf from './components/Shelf/Shelf';

function App() {

  const [tasks, setTasks] = useState([
    { text: 'Flys to Mars', isCompleted: true, shelf: 1, bottle:1,  taskID: 1 /*an array instead with a b/n bool*/ }/*,
    { text: 'Get marooned', isCompleted: false, shelf: 1, bottle:1,  taskID: 3 },
    { text: 'Grow spuds from poo', isCompleted: false, shelf:1, bottle:1,  taskID: 2},
    { text: 'Walk cats', isCompleted: true, shelf:1, bottle:2,  taskID: 4 },
    { text: 'Wash dinner', isCompleted: true, shelf: 2, bottle:1,  taskID: 5 },
    { text: 'Dress dog', isCompleted: false, shelf: 2, bottle:1,  taskID: 6 },
    { text: 'Walk kids', isCompleted: true, shelf: 2, bottle:1,  taskID: 7 },
    { text: 'Watch Alien', isCompleted: false, shelf: 3, bottle:1,  taskID: 8 },
    { text: 'Watch Aliens', isCompleted: true, shelf: 3, bottle:1,  taskID: 9 },
    { text: 'Go to bed', isCompleted: false, shelf: 3, bottle:2, taskID: 10 }*/
  ]);

  let sTasks = [];

  function getShelfTasks(tasks) {

    let shelvesHTML = '';

    // defines and populates the shelves
    for (let i = 0; i < tasks.length; i++) {
      if (tasks.shelf === i) sTasks[i].push();
    }

    // returns the correctly formatted html to define the shelves
    for (let i = 0; i < sTasks; i++) {
      shelvesHTML += <Shelf shelfTasks={`${sTasks[i]}`}/>;
    }
    return <Shelf shelfTasks={``}/>// test REMOVE
    return shelvesHTML; // needs to return a shelf component with tasks
  }

  return (
    <div className="App">
      {getShelfTasks(tasks)}
    </div>
  );
}

export default App;

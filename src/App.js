import React, { useState } from 'react';
import './App.css';
import Shelf from './components/Shelf/Shelf';

function App() {

  // delete function needs confirmation step
// regex task str length
// need an add shelf button
// each shelf needs a default addtask bottle in addition to any bottles

  // destructuring method
  const [tasks, setTasks] = useState([
    { text: 'Fly to Mars', isCompleted: true, shelf: 'morning', bottle:1,  taskID: '001', pos: 1, deadline: 4 },  /*an array instead with a b/n bool*/
    { text: 'Get marooned', isCompleted: false, shelf: 'morning', bottle:1,  taskID: '003', pos: 1, deadline: 0}, // rearrange the order of the properties to be tidier
    { text: 'Grow spuds from poo', isCompleted: false, shelf: 'morning', bottle:1,  taskID: '002',pos: 0, deadline: 2},
    { text: 'Stay home', isCompleted: true, shelf: 'morning', bottle:2,  taskID: '013', pos: 1, deadline: 4 },
    { text: 'Protect the NHS', isCompleted: false, shelf: 'morning', bottle:2,  taskID: '012', pos: 0, deadline: 0},
    { text: 'Save lives', isCompleted: false, shelf: 'morning', bottle:2,  taskID: '011', pos: 0, deadline: 2},
    { text: 'Walk cats', isCompleted: true, shelf: 'afternoon', bottle:2,  taskID: '004', pos: 0, deadline: 11},
    { text: 'Wash dinner', isCompleted: true, shelf: 'afternoon', bottle:1,  taskID: '005', pos: 0, deadline: 7},
    { text: 'Dress dog', isCompleted: false, shelf: 'afternoon', bottle:1,  taskID: '006', pos: 0, }, // needs to handle no deadline
    { text: 'Walk kids', isCompleted: true, shelf: 'afternoon', bottle:1,  taskID: '007', pos: 0, deadline: 8},
    { text: 'Watch Alien', isCompleted: false, shelf: 'evening', bottle:1,  taskID: '008', pos: 1, deadline: 24},
    { text: 'Watch Aliens', isCompleted: true, shelf: 'evening', bottle:1,  taskID: '009', pos: 0, deadline: 365},
    { text: 'Go to bed', isCompleted: false, shelf: 'evening', bottle:2, taskID: '010', pos: 0, deadline: 1},
    { text: 'Midnight feast', isCompleted: false, shelf: 'evening', bottle:3, taskID: '014', pos: 0, deadline: 1},
    { text: 'Wee', isCompleted: false, shelf: 'evening', bottle:4, taskID: '015', pos: 0, deadline: 1},
    { text: 'Nother wee', isCompleted: false, shelf: 'evening', bottle:4, taskID: '016', pos: 1, deadline: 1}
  ]);

  function addTask() {
    console.log('Add task button clicked');
    // needs to identify correct shelf, bottle and position to add the task
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.taskID !== id);
    setTasks(updatedTasks);
  }

  function completeTask(id) {
    console.log('complete ' + id + ' clicked');
    const updatedTasks = tasks.map(task => {
      if(task.taskID === id) {
        !task.isCompleted ? task.isCompleted = true : task.isCompleted = false;
      }
      return task;
    });
    setTasks(updatedTasks);
  }


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
      shelvesHTML.push(<Shelf key={ tasks[i].taskID } shelfTasks={sTasks[i]} deleteTask={ deleteTask } completeTask={ completeTask } addTask={ addTask }/>);
    }
    return <div>{shelvesHTML}</div>;
  }

  return (
        <div className="App">
          {getShelfTasks(tasks)}
        </div>
  );
}

// put in footer <p> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
          

export default App;

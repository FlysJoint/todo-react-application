import React, { useState, useEffect } from 'react';
import './App.css';
import Shelf from './components/Shelf/Shelf';
//import AddTask from './components/AddTask/AddTask';
//import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function App() {

  // delete function needs confirmation step
  // regex task str length
  // seconds since 1970 so subtraction should work
  // need an add shelf button
  // each shelf needs a default addtask bottle in addition to any bottles
  // bottle needs to remain open even if only contains new tasks
  // d functionality

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      axios
        .get("https://pgbx7na299.execute-api.eu-west-2.amazonaws.com/dev/tasks")
        .then(res => {
          setTasks(res.data.tasks);
        })
        .catch(err => {
          console.log("Could not fetch tasks", err);
        });
  }, []);


  function addTask(text, dueDate, shelf, bottle, pos) {
    const newTask = { 
      "text": text,
      "dueDate": dueDate,
      "isCompleted": false, 
      "shelf": shelf,
      "bottle": bottle, 
      "pos": pos,
      "username": "bob5" 
    }

    axios
    .post('https://pgbx7na299.execute-api.eu-west-2.amazonaws.com/dev/tasks', newTask)
    .then(// If the request is successful, get the task id and add it to the new task object
      (res) => {
        const updatedTasks = [ ...tasks, newTask ];
        setTasks( updatedTasks );
      }
    )
    .catch((err) => {
      console.log('Error in adding a task', err)
    })
  }

function completeTask(id) {

  //console.log(tasks);
    const updatedTasks = tasks.map(task => {
      if(task.taskID === id) {
        !task.isCompleted ? task.isCompleted = 1 : task.isCompleted = 0;
      }
      return task;
    });

    const updatedTask = tasks.filter(task => task.taskID === id);
    console.log(updatedTask);

    axios
    .put(
      `https://pgbx7na299.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`, updatedTask[0]
    )
    .then(res => {
      // There is probably no data returned from a Put request.
      // But if you're in the "then" function you know the request succeeded.
      console.log('complete ' + id + ' clicked');

      // axios
      //   .get("https://pgbx7na299.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      //   .then(res => {
      //     setTasks(res.data.tasks);
      //   })
      //   .catch(err => {
      //     console.log("Could not fetch tasks", err);
      //   });

    })
    .catch(err => {
      console.log("Error updating task " + id, err);
    });

    setTasks( updatedTasks );

  }

  function deleteTask(id) {

    axios
      .delete(`https://pgbx7na299.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`)
      .then(res => {
        // There is probably no data returned from a Delete request.
        // But if you're in the "then" function you know the request succeeded.
        const updatedTasks = tasks.filter(task => task.taskID !== id);
        setTasks(updatedTasks);
      })
      .catch(err => {
        console.log("Could not delete task", err);
      });
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
      shelvesHTML.push(<Shelf key={ shelfTitles[i] } myShelf={ shelfTitles[i] } shelfTasks={sTasks[i]} deleteTask={ deleteTask } completeTask={ completeTask } addTask={ addTask }/>);
    }
    return <div>{shelvesHTML}</div>;
  }

  return (
        <div className="App">
          {getShelfTasks(tasks)}
        </div>
  );
}
        
export default App;
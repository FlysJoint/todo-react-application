import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskItem from './TaskItem/TaskItem';

function App() {
  return (
    <div className="App">
      <TaskItem text='do dishes'/>
      <TaskItem text='buy cat food'/>
      <TaskItem text='mop floor'/>
    </div>
  );
}

export default App;

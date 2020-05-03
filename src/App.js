import React from 'react';
import logo from './logo.svg';
import './App.css';
import TasksContainer from './TasksContainer/TasksContainer';
// import TaskItem from './TasksContainer/TaskItem/TaskItem';
import Shelf from './Shelf/Shelf';

function App() {
  return (
    <div className="App">
      <Shelf/>
    </div>
  );
}

export default App;

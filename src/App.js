import React from 'react';
import logo from './logo.svg';
import './App.css';
import TasksContainer from './components/TasksContainer/TasksContainer';
// import TaskItem from './TasksContainer/TaskItem/TaskItem';
import Shelf from './components/Shelf/Shelf';

function App() {
  return (
    <div className="App">
      <Shelf/>
      <Shelf/>
      <Shelf/>
      <Shelf/>
    </div>
  );
}

export default App;

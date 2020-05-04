import React from 'react';
import './Shelf.css';
import TasksContainer from '../TasksContainer/TasksContainer';

function Shelf() {
  return (
    <div>
        <div className="container screen">
            <div className="row" id="nowrap">
                <TasksContainer/>
                <TasksContainer/>
                <TasksContainer/>
                <TasksContainer/>
                <TasksContainer/>
            </div>
        </div>
        <div className = "row shelf" id="nowrap"></div>
    </div>
  );
}

export default Shelf;
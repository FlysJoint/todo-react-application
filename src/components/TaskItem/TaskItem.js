import React from 'react';
import './TaskItem.css';



function TaskItem(task) {

  //let taskComplete = this.isCompleted;

  // function isTaskComplete() {
  //   taskComplete = false ? "task-body" : "completed-task-body";
  // }

  return (
    <div className="card">
      <div className="card-body" id="task-body" /*style={{width: auto}}*/>
        <div className="row">
          <h6 className="card-title col-2" id="id-text" data-toggle="tooltip" data-placement="left" title="Tick/Untick to complete/uncomplete">C</h6>
          <h6 className="card-text col-8" data-toggle="tooltip" data-placement="bottom" title="Optional deadline" display="inline">{task.deadline}</h6>
          <h6 className="card-title col-2" id="id-text" data-toggle="tooltip" data-placement="right" title="Delete task">X</h6>
          <p className="card-text col-12" id="task-text" data-toggle="tooltip" data-placement="bottom" title="Add task text">{task.text}</p>                                                 
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
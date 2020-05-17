import React from 'react';
import './TaskItem.css';

import deleteIcon from '../../icons/delete.svg'

function TaskItem(props) {

  function handleDeleteClick() {
    console.log('Delete has been clicked');
    console.log(props.taskID);
    props.deleteTask(props.taskID);
  }

  return (
    <div className="card">
      <div className="card-body" id={`${props.completed ? "completed-task-body" : "task-body"}`} /*style={{width: auto}}*/>
        <div className="row">
          <button type="button" className="col-2 btn btn-secondary btn-sm" id="id-text" data-toggle="tooltip" data-placement="left" title="Tick/Untick to complete/uncomplete">{props.taskID}</button>
          <h6 className="card-text col-8" data-toggle="tooltip" data-placement="bottom" title="Optional deadline" display="inline">{props.deadline > 1 ? `${props.deadline} days` : '1 DAY!!!'}</h6>
          <button 
            type="button" className="col-2 btn btn-secondary btn-sm" id="id-text" onClick={ handleDeleteClick }

            data-toggle="tooltip" data-placement="right" title="Delete task">
            <img src={ deleteIcon } className='delete-svg'/>
          </button>
          <p className="card-text col-12" id={`${props.completed ? "completed-task-text":"task-text"}`} data-toggle="tooltip" data-placement="bottom" title="Add task text">{props.text}</p>                                                 
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

  // <div class="form-check">
  //   <input type="checkbox" class="form-check-input" id="exampleCheck1">
  //   <label class="form-check-label" for="exampleCheck1">Check me out</label>
  // </div>
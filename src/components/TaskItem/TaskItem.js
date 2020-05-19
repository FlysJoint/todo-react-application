import React from 'react';
import './TaskItem.css';

import deleteIcon from '../../icons/delete.svg'

function TaskItem(props) {

  return (
    <div className="card">
      <div className="card-body" id={`${props.completed ? "completed-task-body" : "task-body"}`} /*style={{width: auto}}*/>
        <div className="row">

          <div className="col-1 form-check" id="outline" data-toggle="tooltip" data-placement="left" title="Tick/Untick to complete/uncomplete">
            <input 
              type="checkbox" 
              defaultChecked={ props.completed }
              className="form-check-input large-check-box" 
              id="exampleCheck1" 
              onClick={ () => props.completeTask(props.taskID) }
            ></input>
            <label className="form-check-label" htmlFor="exampleCheck1"></label>
          </div>

          <h6 className="card-text col-8" id="outline" data-toggle="tooltip" data-placement="bottom" title="Optional deadline" display="inline">{props.deadline > 1 ? `${props.deadline} days` : '1 DAY!!!'}</h6>

          <button 
            type="button" className="col-1 btn" id="outline" onClick={ () => props.deleteTask(props.taskID) }

            data-toggle="tooltip" data-placement="right" title="Delete task">
            <img src={ deleteIcon } alt='' className='delete-svg'/>
          </button>

          <p 
            id={`${props.completed ? "completed-task-text":"task-text"}`} 
            className="card-text col-12" 
            data-toggle="tooltip" 
            data-placement="bottom"
            title="Add task text"
            >{props.text}
          </p>    

        </div>
      </div>
    </div>
  );
}

export default TaskItem;
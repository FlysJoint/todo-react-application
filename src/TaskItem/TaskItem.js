import React from 'react';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div className="card">
      <div className="card-body" id="task-body" style="width: auto">
        <div className="row">
          <h6 className="card-title col-2" id="id-text" data-toggle="tooltip" data-placement="left" title="Tick/Untick to complete/uncomplete">T</h6>
          <h6 className="card-text col-8" data-toggle="tooltip" data-placement="bottom" title="Optional deadline" display="inline">ddmmyy</h6>
          <h6 className="card-title col-2" id="id-text" data-toggle="tooltip" data-placement="right" title="Delete task">X</h6>
          <p className="card-text col-12" id="task-text" data-toggle="tooltip" data-placement="bottom" title="Add task text">Task text of summat I need to do, but I'm not sure how long the text will be. Hopefully not too long, but not be too small.</p>                                                 
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
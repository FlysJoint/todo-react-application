import React, { Fragment } from 'react';
import './AddTask.css';

import addIcon from '../../icons/addIcon.svg'

import upIcon from '../../icons/upIcon.svg'
import downIcon from '../../icons/downIcon.svg'

import cancelIcon from '../../icons/deleteIcon.svg'


function AddTask(props) {

    let addTaskStatus = 0;

    function switchTaskStatus() {
        addTaskStatus === 0 ? addTaskStatus = 1 : addTaskStatus = 0;
        //console.log('switching within AddTask.js');
        props.addTask(addTaskStatus);
    }

    function switchLayout() {

        switch (addTaskStatus) {
            case 0:
                return ( 
                    <Fragment>
                        <button 
                            type="button" className="col-12 btn" id="outline"  onClick={ () => switchTaskStatus() }
                            data-toggle="tooltip" data-placement="right" title="Add task" >
                            <img src={ addIcon } alt='' className='add-svg'/>
                        </button>
                    </Fragment>
                );
            case 1:
                return  (   
                    <Fragment>
                        <div className="card">
                            <div className="card-body" id='task-body' >
                                <div className="row">

                                    <button 
                                        type="button" className="col-2 btn"

                                        data-toggle="tooltip" data-placement="right" title="Add task above">
                                        <img src={ upIcon } alt='' className='up-svg'/>
                                    </button>

                                    <button 
                                        type="button" className="col-2 btn"

                                        data-toggle="tooltip" data-placement="right" title="Add task below">
                                        <img src={ downIcon } alt='' className='down-svg'/>
                                    </button>

                                    <h6 className="card-text col-6" id="outline" data-toggle="tooltip" data-placement="bottom" title="Optional deadline" display="inline">{ '0 days'}</h6>

                                    <button 
                                        type="button" className="col-1 btn" 

                                        data-toggle="tooltip" data-placement="right" title="Cancel task" >
                                        <img src={ cancelIcon } alt='' className='delete-svg'/>
                                    </button>

                                    <p 
                                        id='task-text'
                                        className="card-text col-12" 
                                        data-toggle="tooltip" 
                                        data-placement="bottom"
                                        title="Add task text"
                                        placeholder='...add task here'
                                        >
                                    </p>    

                                </div>
                            </div>
                        </div>
                    </Fragment> 
                );
            default:
                console.log('invalid add task layout');
        }
    }

  return switchLayout();
}

export default AddTask;
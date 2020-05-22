import React, { Fragment, useState } from 'react';
import './AddTask.css';

import addIcon from '../../icons/addIcon.svg'

import upIcon from '../../icons/upIcon.svg'
import downIcon from '../../icons/downIcon.svg'

import cancelIcon from '../../icons/deleteIcon.svg'



function AddTask (props) {

    const [text, setText] = useState('');
    const [dueDate, setDueDate] = useState('');

    let createTaskStatus = 1;

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleDateChange(event) {
        setDueDate(event.target.value);
    }

    function handleAddTaskClick() {
        console.log(props.myShelf, props.myBottle);
        props.addTask(text, dueDate, props.myShelf , props.myBottle, 0); // needs to know which shelf, bottle and pos
    }

    // return ( 
    //     <Fragment>
    //         <button 
    //             type="button" className="col-12 btn" id="outline"
    //             data-toggle="tooltip" data-placement="right" title="Add task" >
    //             <img src={ addIcon } alt='' className='add-svg'/>
    //         </button>
    //     </Fragment>
    // );

    return  (   
        <Fragment>
            <div className="card">
                <div className="card-body" id='task-body' >
                    <div className="row">

                        <button 
                            type="button" 
                            className="col-2 btn"
                            data-toggle="tooltip" 
                            data-placement="right" 
                            title="Add task above"
                            onClick={  handleAddTaskClick }
                            >
                            <img src={ upIcon } alt='' className='up-svg'/>
                        </button>

                        {/* <button 
                            type="button" className="col-2 btn"

                            data-toggle="tooltip" data-placement="right" title="Add task below">
                            <img src={ downIcon } alt='' className='down-svg'/>
                        </button> */}

                        <input
                            type='date'
                            className="card-text col-8" 
                            id="outline" 
                            data-toggle="tooltip" 
                            data-placement="bottom" 
                            title="Optional deadline" 
                            display="inline"
                            onChange={ handleDateChange }
                            value={ dueDate }
                        />
                        
                        <button 
                            type="button" 
                            className="col-2 btn"
                            data-toggle="tooltip" 
                            data-placement="right" 
                            title="Add task below"
                            onClick={  handleAddTaskClick }
                            >
                            <img src={ downIcon } alt='' className='down-svg'/>
                        </button>

                        {/* <button 
                            type="button" className="col-2 btn" onClick={ () => props.createTask(createTaskStatus) }

                            data-toggle="tooltip" data-placement="right" title="Cancel task" >
                            <img src={ cancelIcon } alt='' className='delete-svg'/>
                        </button> */}

                        <input
                            id='task-text'
                            className="card-text col-12" 
                            data-toggle="tooltip" 
                            data-placement="bottom"
                            title="Add task text"
                            // placeholder='...add task here'
                            onChange={ handleTextChange }
                            value = { text }
                        /> 

                    </div>
                </div>
            </div>
        </Fragment> 
    );
}
export default AddTask;
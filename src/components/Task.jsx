import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';

const Task = ({title,index }) => {
	const {handlDeleteTask} = useContext(Context);
	const toggleTitleLine = (e)=> {
		if(e.target){
      e.target.classList.toggle('strike');
		}
	};
	return (
		<div className='task'>
			<div onClick={toggleTitleLine} className="title">{title}</div>
			<div className="task-btns-wrapper">
				<button className='task-edit-btn' >Edit</button>
				<button data-num={index} onClick={handlDeleteTask} className='task-del-btn' >Delete</button>
			</div>
		</div>
	);
};
 Task.propTypes = {
 title: PropTypes.string.isRequired,
 index: PropTypes.number
};

export default Task;
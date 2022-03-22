import React from 'react';
import PropTypes from 'prop-types';

const Task = ({title}) => {
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
				<button className='task-del-btn' >Delete</button>
			</div>
		</div>
	);
};
Task.propTypes = {
 title: PropTypes.string.isRequired
};

export default Task;
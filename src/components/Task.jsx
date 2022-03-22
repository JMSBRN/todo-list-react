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
			<button className='task-del-btn' >Delete</button>
		</div>
	);
};
Task.propTypes = {
 title: PropTypes.string.isRequired
};

export default Task;
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';
import Tag from './Tag';

const Task = ({title,index, tagTitle }) => {
	const {handlDeleteTask, handleEditTask, handleUpdateTask} = useContext(Context);
	const toggleTitleLine = (e)=> {
		if(e.target){
      e.target.classList.toggle('strike');
		}
	};
	return (
		<div className='task'>
			<Tag tagTitle={tagTitle} indexForClassName={JSON.stringify(index)}/>
			<div onClick={toggleTitleLine} className={`title-${index}`}>{title}</div>
			<div className="task-btns-wrapper">
				<button data-num={index} onClick={handleUpdateTask} className='task-update-btn' >update</button>
				<button data-num={index} onClick={handleEditTask} className='task-edit-btn' >Edit</button>
				<button data-num={index} onClick={handlDeleteTask} className='task-del-btn' >Delete</button>
			</div>
		</div>
	);
};
 Task.propTypes = {
 title: PropTypes.string.isRequired,
 tagTitle: PropTypes.string,
 index: PropTypes.number
};

export default Task;
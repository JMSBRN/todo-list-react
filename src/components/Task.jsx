import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';
import Tag from './Tag';

const Task = ({id, index, title, tagTitle }) => {
	const {deleteTask, setEditingMode, editingMode, editText, setEditText, updateTask} = useContext(Context);
	const toggleTitleLine = (e)=> {
		if(e.target){
      e.target.classList.toggle('strike');
		}
	};
	return (
		<div className='task'>
			<Tag tagTitle={tagTitle} />
			{editingMode === id? (
					<>
					<input onChange={(e) => setEditText(e.target.value)} type="text" value={editText? editText : title } />
					<button onClick={() => updateTask(id)} className='task-update-btn'>update</button>
					</>
			): (<div onClick={toggleTitleLine} className="title">{title}</div>
			)}
			<div className="task-btns-wrapper">
				<button onClick={() => setEditingMode(id) } className='task-edit-btn' >Edit</button>
				<button onClick={() => deleteTask(index)} className='task-del-btn' >Delete</button>
			</div>
		</div>
	);
};
 Task.propTypes = {
 title: PropTypes.string.isRequired,
 tagTitle: PropTypes.string,
 index: PropTypes.number,
 id: PropTypes.number
};

export default Task;
import React, { useContext } from 'react';
import { Context } from '../context';

const Tags = () => {
	const {tags, filteredByTag} = useContext(Context);
	return (
		<div className='tags'>
			{tags.map( el => 
				<div onClick={() => filteredByTag(el.tagName)} key={el.id} className="tags-item">{el.tagName}</div>
				)}
		</div>
	);
};

export default Tags;
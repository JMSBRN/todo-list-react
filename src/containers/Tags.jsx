import React, { useContext } from 'react';
import { Context } from '../context';

const Tags = () => {
	const {tags} = useContext(Context);
	return (
		<div className='tags'>
			{tags.map( el => 
				<div key={el.id} className="tags-item">{el.tagName}</div>
				)}
		</div>
	);
};

export default Tags;
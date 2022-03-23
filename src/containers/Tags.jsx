import React from 'react';
import Tag from '../components/Tag';

const Tags = () => {

	const tags = [
		{color:'red'},
		{color:'red'},
		{color:'red'},
		{color:'red'},
		{color:'red'},
	];
	return (
		<div className='tags'>
			{
				tags.map((el, index) => 
					<Tag key={index} />
					)
			}
			</div>
	);
};

export default Tags;
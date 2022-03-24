import React, { useContext } from 'react';
import Tag from '../components/Tag';
import { Context } from '../context';

const Tags = () => {
	const {tags} = useContext(Context);
	return (
		<div className='tags'>
			{tags.map((el,idx) => <Tag key={idx} tagTitle={el.title}/>)}
		</div>
	);
};

export default Tags;
import React, { useContext } from 'react';
import Tag from '../components/Tag';
import { Context } from '../context';

const Tags = () => {
	const {tags, tagTitle} = useContext(Context);
	return (
		<div className='tags'>
			{tags.map((el,idx) => <Tag key={idx} tagTitle={tagTitle}/>)}
		</div>
	);
};

export default Tags;
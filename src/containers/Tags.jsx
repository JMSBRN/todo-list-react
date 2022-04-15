import React, { useContext } from 'react';
import Tag from '../components/Tag';
import { Context } from '../context';

const Tags = () => {
	const {tags, handelTagkGetText} = useContext(Context);

	return (
		<div className='tags'>
			{tags.map((el,idx) => <div key={idx} onClick={handelTagkGetText} className="tag-wrapper">
				<Tag  key={idx} index={`tags-${idx}`} tagTitle={el.tagName}/>
			</div>)}
		</div>
	);
};

export default Tags;
import React, { useContext } from 'react';
import { Context } from '../context';

const Tags = () => {
	const {tags, getTagTitleFromTags, setAllTags} = useContext(Context);
	return (
		<div className='tags'>
			<div className="tags-wrapper">
				{tags.map( (el,idx) =>
					<button onClick={() => getTagTitleFromTags(el.tagName)} key={idx} className="tags-item">{el.tagName}</button>
					)}
			</div>
				<button className='all-tags-btn' onClick={setAllTags}>all Tasks</button>
		</div>
	);
};

export default Tags;
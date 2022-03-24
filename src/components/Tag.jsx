import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import { Context } from '../context';

const Tag = ({index}) => {
 const {tagTitle} = useContext(Context);
	return (
		<div className={`tag-${index}`}>{tagTitle}</div>
	);
};
Tag.propTypes ={
 index: PropTypes.number,
};

export default Tag;
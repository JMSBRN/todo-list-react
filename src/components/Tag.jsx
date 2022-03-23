import React from 'react';

import PropTypes from 'prop-types';

const Tag = ({index}) => {

	return (
		<div className={`tag-${index}`}></div>
	);
};
Tag.propTypes ={
 index: PropTypes.number
};

export default Tag;
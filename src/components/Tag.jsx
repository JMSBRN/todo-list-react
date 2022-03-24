import React from "react";

import PropTypes from "prop-types";
const Tag = ({ index, tagTitle }) => {
  return <div className={`tag-${index}`}>{tagTitle}</div>;
};
Tag.propTypes = {
  index: PropTypes.number,
  tagTitle: PropTypes.string,
};

export default Tag;

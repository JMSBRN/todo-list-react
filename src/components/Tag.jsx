import React from "react";

import PropTypes from "prop-types";
const Tag = ({ indexForClassName, tagTitle }) => {
  return <div className={`tag-${indexForClassName}`}>{tagTitle}</div>;
};
Tag.propTypes = {
  indexForClassName: PropTypes.string,
  tagTitle: PropTypes.string,
};

export default Tag;

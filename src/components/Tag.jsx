import React from "react";
import PropTypes from "prop-types";

const Tag = ({ tagText }) => {
  return <>
    <div className="tag">{tagText}</div>
    </>;
};
Tag.propTypes = {
  tagText: PropTypes.string,

};

export default Tag;

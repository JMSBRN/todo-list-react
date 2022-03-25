import React from "react";
import PropTypes from 'prop-types';

const Select = ({value, onChange, labelTitle}) => {
  return (
    <div className="filter">
      <label htmlFor="select-sort-tags">{labelTitle}</label>
      <select id="select-sort-tags" value={value} onChange={onChange}>
        <option  >
          --choose an option--
        </option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>
    </div>
  );
};
Select.propTypes = {
 value: PropTypes.string,
 onChange: PropTypes.func,
 labelTitle: PropTypes.string
};

export default Select;

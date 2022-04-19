import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { Context } from "../context";

const Select = ({ labelTitle}) => {

  const {sortValue  ,selectedSort} = useContext(Context);

  return (
    <div className="filter">
      <label htmlFor="select-sort-tags">{labelTitle}</label>
      <select id="select-sort-tags" value={sortValue}  onChange={selectedSort}>
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

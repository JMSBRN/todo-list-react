import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ textInBtn }) => {
	return (
		<div className='input-form-wrapper'>
      <input className='input-form' type="text" name="" id="" placeholder='input task' />
			<button className='submit-form-btn' type="submit">{textInBtn}</button>
		</div>
	);
};
InputForm.propTypes = {
 textInBtn: PropTypes.string.isRequired
};


export default InputForm;
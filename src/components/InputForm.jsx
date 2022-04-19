import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';

const InputForm = ({ textInBtn }) => {
	const {handelSubmit, value, setValue} = useContext(Context);
	return (
		<div className='input-form-wrapper'>
      <input onChange={(e) => setValue(e.target.value)} className='input-form' type="text" value={value} id="input-form" placeholder='input task' />
			<button onClick={handelSubmit} className='submit-form-btn' type="submit">{textInBtn}</button>
		</div>
	);
};
InputForm.propTypes = {
 textInBtn: PropTypes.string.isRequired
};


export default InputForm;
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';

const InputForm = ({ textInBtn }) => {
	const {handleAddTask, getTitleFromInput} = useContext(Context);
	return (
		<div className='input-form-wrapper'>
      <input onChange={getTitleFromInput} className='input-form' type="text" name="" id="" placeholder='input task' />
			<button onClick={handleAddTask} className='submit-form-btn' type="submit">{textInBtn}</button>
		</div>
	);
};
InputForm.propTypes = {
 textInBtn: PropTypes.string.isRequired
};


export default InputForm;
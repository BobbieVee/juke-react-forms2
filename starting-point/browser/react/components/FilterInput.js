import React from 'react';

const FilterInput = (props) => {
	// console.log('props = ', props.handleChange)
	return(
		<form className='form-group' style={{marginTop: '20px'}}>
			<input
				className='form-control'
				onChange={props.handleChange}
				placeholder='Enter Artist Name'
			/>
		</form>
	)
}

export default FilterInput;
import React from 'react';

const handleChange = (target, { state, setState }) =>
	setState({ ...state, shapeType: target.value });

const DropDown = (context) => {
	const { state } = context;

	return <div>
		<label>Select the shape</label>
		<select
			value={ state.shapeType }
			className="dropDown"
			onChange={ ({ target }) => handleChange(target, context) }
		>
			<option value="select">
				Select</option>
			<option value="square">
				Square</option>
			<option value="circle">
				Circle</option>
		</select>
	</div>;
};

export default DropDown;

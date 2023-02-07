import React from 'react';

const handleChange = ({ state, setState, data: { target }}) =>
	setState({ ...state, space: target.value });

const InputSpace = (context) => {
	const { state: { space }} = context;

	return <div>
		<span>Enter spacing between shapes</span>
		<input
			className="input"
			type="text"
			value={ space }
			onChange={ ({ target }) =>
				handleChange({ ...context, data: { target }}) }
		/>
	</div>;
};

export default InputSpace;

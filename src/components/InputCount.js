import React from 'react';

const handleChange = ({ state, setState, data: { target }}) =>
	setState({ ...state, shapeCount: target.value });

const InputCount = (context) => {
	const { state: { shapeCount }} = context;

	return <div>
		<span>Enter count</span>
		<input
			className="input"
			type="text"
			value={ shapeCount }
			onChange={ ({ target }) =>
				handleChange({ ...context, data: { target }}) }
		/>
	</div>;
};

export default InputCount;

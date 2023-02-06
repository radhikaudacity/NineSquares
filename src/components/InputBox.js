import React from 'react';
const InputBox = ({ state, setState }) => {
	const handleChange = ({ value }) =>
		setState({ ...state, shapeCount: value });

	return <div>
		<span>Enter count</span>
		<input
			className="input"
			type="text"
			value={ state.shapeCount }
			onChange={ ({ target }) =>
				handleChange(target) }
		/>
	</div>
	;
};

export default InputBox;

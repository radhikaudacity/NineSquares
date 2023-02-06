import React from 'react';
const InputSpace = ({ state, setState }) => {
	const handleChange = ({ value }) => setState({ ...state, space: value });

	return <div>
		<span>Enter spacing between shapes</span>
		<input
			className="input"
			type="text"
			value={ state.space }
			onChange={ ({ target }) =>
				handleChange(target) }
		/>
	</div>
	;
};

export default InputSpace;

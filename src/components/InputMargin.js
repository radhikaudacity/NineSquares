import React from 'react';
const InputMargin = ({ state, setState }) => {
	const handleChange = ({ value }) => setState({ ...state, margin: value });

	return <div>
		<span>Enter margin</span>
		<input
			className="input"
			type="text"
			value={ state.margin }
			onChange={ ({ target }) =>
				handleChange(target) }
		/>
	</div>
	;
};

export default InputMargin;

import React from 'react';
const InputBox = ({ state, setState }) => {
	const handleChange = ({ value }) => setState({ number: value });

	return (
		<input
			className="input"
			type="text"
			value={ state.number }
			onChange={ ({ target }) =>
				handleChange(target) }
		/>);
};

export default InputBox;

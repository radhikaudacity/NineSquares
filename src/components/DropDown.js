import React from 'react';

const handleChange = ({ state, setState, data: { target }}) =>
	setState({ ...state, shapeType: target.value });

const DropDown = (context) => {
	const { state: { shapeType }} = context;

	return <div>
		<label>Select the shape</label>
		<select
			value={ shapeType }
			className="dropDown"
			onChange={ ({ target }) =>
				handleChange({ ...context, data: { target }}) }
		>
			{['square', 'circle']
				.map((item, index) =>
					<option key={ index } value={ item }>
						{item}</option>)	}

		</select>
	</div>;
};

export default DropDown;

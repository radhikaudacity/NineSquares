import React from 'react';

const GeneralShape = ({ shape }) => {
	const { style } = shape;

	return (
		<div
			className="shapeClass"
			style={ style }
		/>);
};

export default GeneralShape;

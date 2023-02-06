import React from 'react';
const GeneralShape = ({ shape }) => {
	const { left, top, borderRadius, position, height, width,
		backgroundColor, border } = shape;

	return (
		<div
			className="shapeClass"
			style={ {
				left, top, borderRadius, border,
				position, height, width, backgroundColor,
			} }
		/>);
};

export default GeneralShape;

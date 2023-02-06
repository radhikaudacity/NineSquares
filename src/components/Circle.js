import React from 'react';

const radius = 100;
const two = 2;
const offSetX = 500;
const offSetY = 500;
const width = 50;

const Circle = ({ index, number }) => {
	const theta = two * Math.PI / number;
	const movePosY = radius * Math.sin(theta * index) + offSetY;
	const movePosX = radius * Math.cos(theta * index) + +offSetX;

	return (
		<div
			key={ index }
			style={ {
				position: 'absolute',
				left: `${ movePosX }px`,
				top: `${ movePosY }px`,
			} }
			className="innerBox "
		/>);
};

export default Circle;

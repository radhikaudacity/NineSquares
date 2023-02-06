import React from 'react';

const margin = 2;
const width = 50;

const Square = ({ index, number }) => {
	const colNo = index % number;
	const rowNo = Math.floor(index / number);
	const movePosX = (width + margin) * colNo;
	const movePosY = (width + margin) * rowNo;

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
}
	;

export default Square;

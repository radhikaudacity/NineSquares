import React from 'react';
import ShapeManager from '../services/ShapeManager';

const Square = ({ shapeCount, index, margin }) =>
	<div
		style={ {
			left: `${ ShapeManager.getSquarePosition(
				shapeCount, index, margin
			).movePosX }px`,
			top: `${ ShapeManager.getSquarePosition(
				shapeCount, index, margin
			).movePosY }px`,
		} }

	/>
	;

export default Square;

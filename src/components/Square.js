import React from 'react';
import ShapeManager from '../services/ShapeManager';

const Square = ({ shapeCount, index, margin }) =>
	<div
		style={ {
			position: 'absolute',
			height: '50px',
			width: '50px',
			backgroundColor: '#ecC',
			left: `${ ShapeManager.squarePosition(
				shapeCount, index, margin
			).movePosX }px`,
			top: `${ ShapeManager.squarePosition(
				shapeCount, index, margin
			).movePosY }px`,
		} }

	/>
	;

export default Square;

import React from 'react';
import ShapeManager from '../services/ShapeManager';

const Circle = ({ shapeCount, index }) =>
	<div
		style={ {
			position: 'absolute',
			left: `${ ShapeManager.circlePosition(shapeCount, index).movePosX }px`,
			top: `${ ShapeManager.circlePosition(shapeCount, index).movePosY }px`,
			border: '1px solid red',
			height: '50px',
			width: '50px',
			borderRadius: '50%',
			backgroundColor: 'aquamarine',

		} }

	/>;

export default Circle;

import React from 'react';
import ShapeManager from '../services/ShapeManager';

const Circle = ({ shapeCount, index }) =>
	<div
		style={ {
			left: `${ ShapeManager.circlePosition(shapeCount, index).movePosX }px`,
			top: `${ ShapeManager.circlePosition(shapeCount, index).movePosY }px`,
		} }

	/>;

export default Circle;

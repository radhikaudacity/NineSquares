import React from 'react';
import ShapeManager from '../services/ShapeManager';
import GeneralShape from './GeneralShape';

const Shapes = (context) => {
	const shapes = ShapeManager.createShapes(context);
	const { config: { pattern }} = context;

	return <div className="center">
		<h1>blink pattern:{pattern}</h1>
		<h1>blink digit:{ShapeManager.patternDigit(context)} </h1>
		{ ShapeManager.blink(context) && shapes.map((shape, index) =>
			<GeneralShape key={ index } shape={ shape }/>)}
	</div>;
};

export default Shapes;

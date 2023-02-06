import React from 'react';
import InputBox from './InputBox';
import InputSpace from './InputSpace';
import ShapeManager from '../services/ShapeManager';

const Squares = (context) => {
	const { state: { shapeCount, margin }} = context;
	const shapes = ShapeManager.createShapes(context);

	return (
		<div>
			<p>Select the shape, number of shapes and the spacing </p>
			<InputBox { ...context }/>
			<InputSpace { ...context }/>
			{shapes.map((shape, index) =>
				<div
					key={ index }
					className={ `${ shape.class }` }
				/>)}

		</div>);
};

export default Squares;

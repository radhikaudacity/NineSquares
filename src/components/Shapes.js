import React from 'react';
import DropDown from './DropDown';
import InputBox from './InputBox';
import InputSpace from './InputSpace';
import ShapeManager from '../services/ShapeManager';

const Shapes = (context) => {
	const shapes = ShapeManager.createShapes(context);

	return <div className="container">
		<p>Select the shape, number of shapes and the spacing </p>
		<DropDown { ...context }/>
		<InputBox { ...context }/>
		<InputSpace { ...context }/>
		{shapes.map((shape, index) =>
			<div
				key={ index }
				className={ `${ shape.class }` }
				style={ {
					left: `${ shape.shapeX }`,
					top: `${ shape.shapeY }`,
				} }

			/>)}
	</div>;
};

export default Shapes;

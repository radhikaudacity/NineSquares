import React from 'react';
import DropDown from './DropDown';
import InputCount from './InputCount';
import InputSpace from './InputSpace';
import ShapeManager from '../services/ShapeManager';
import GeneralShape from './GeneralShape';

const Shapes = (context) => {
	const shapes = ShapeManager.createShapes(context);

	return <div className="container">
		<p>Select the shape, number of shapes and the spacing </p>
		<DropDown { ...context }/>
		<InputCount { ...context }/>
		<InputSpace { ...context }/>
		<div>
			{shapes.map((shape, index) =>
				<GeneralShape key={ index } shape={ shape }/>)}
		</div></div>;
};

export default Shapes;

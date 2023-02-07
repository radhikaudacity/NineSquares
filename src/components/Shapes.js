import React from 'react';
import ShapeManager from '../services/ShapeManager';
import GeneralShape from './GeneralShape';

const Shapes = (context) => {
	const shapes = ShapeManager.createShapes(context);

	return <div>
		{shapes.map((shape, index) =>
			<GeneralShape key={ index } shape={ shape }/>)}
	</div>;
};

export default Shapes;

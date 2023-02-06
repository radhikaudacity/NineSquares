import { range } from '@laufire/utils/collection';
import React from 'react';
import Circle from './Circle';

const Circles = ({ state: { shapeCount }}) =>
	<div>
		<p>Select the number of circles and the space between them </p>
		{range(0, shapeCount).map((dummy, index) =>
			<Circle
				key={ index }
				index={ index }
				shapeCount={ shapeCount }
			/>)}
	</div>;

export default Circles;

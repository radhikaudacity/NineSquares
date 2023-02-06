import { range } from '@laufire/utils/collection';
import React from 'react';
import Square from './Square';

const Squares = ({ state: { shapeCount, margin }}) =>
	<div>
		{range(0, shapeCount).map((dummy, index) =>
			<Square
				key={ index }
				index={ index }
				shapeCount={ shapeCount }
				margin={ margin }

			/>)}
	</div>;

export default Squares;

import { range } from '@laufire/utils/collection';
import React from 'react';
import InputBox from './InputBox';
import Square from './Square';
import Circle from './Circle';

const exponent = 2;
const Shapes = (context) => {
	const { state: { number }} = context;

	const totalSquares = Math.pow(number, exponent);

	return <div className="container">
		<InputBox { ...context }/>
		<div className="outerBox">
			{range(0, totalSquares).map((dummy, index) =>
				<Square
					key={ index }
					index={ index }
					number={ number }

				/>)}
		</div>
		<div className="outerBox">
			{range(0, number).map((dummy, index) =>
				<Circle key={ index } index={ index } number={ number }/>)}
		</div>
	</div>;
};

export default Shapes;

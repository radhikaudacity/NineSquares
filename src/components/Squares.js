import { range } from '@laufire/utils/collection';
import React from 'react';
import InputBox from './InputBox';
import Square from './Square';

const halfWidth = 0;
const exponent = 2;
const margin = 2;
const radius = 100;

const two = 2;
// const colNo = index % number;
// const rowNo = Math.floor(index / number);

const Squares = (context) => {
	const { state: { number }} = context;

	const totalSquares = Math.pow(number, exponent);
	const theta = two * Math.PI / number;

	return <div className="container">
		<InputBox { ...context }/>
		<div className="outerBox">
			{range(0, number).map((dummy, index) =>
				<Square
					key={ index }
					movePosY={ halfWidth
						+ radius * Math.sin(theta * index) + radius }
					movePosX={ halfWidth
						+ radius * Math.cos(theta * index) + radius }
				/>)}
		</div>
	</div>;
};

export default Squares;

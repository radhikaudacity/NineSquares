import { range } from '@laufire/utils/collection';
import React from 'react';
import InputBox from './InputBox';
import Square from './Square';

const movePos = 50;
const exponent = 2;
const margin = 2;

const Squares = (context) => {
	const { state: { number }} = context;

	const totalSquares = Math.pow(number, exponent);

	return <div className="container">
		<InputBox { ...context }/>
		<div className="outerBox">
			{range(0, totalSquares).map((dummy, index) => {
				const colNo = index % number;
				const rowNo = Math.floor(index / number);

				return (
					<Square
						key={ index }
						movePosY={ (movePos + margin) * rowNo }
						movePosX={ (movePos + margin)	* colNo }
					/>);
			})}
		</div>
	</div>;
};

export default Squares;

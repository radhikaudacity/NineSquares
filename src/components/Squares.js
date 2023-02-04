import { range } from '@laufire/utils/collection';
import React from 'react';
import InputBox from './InputBox';
import Square from './Square';

const Squares = (context) => {
	const { state: { number }} = context;

	return <div className="container">
		<InputBox { ...context }/>
		<div className="outerBox">
			{	range(0, number).map((dummy, indexRow) =>
				<div key={ indexRow } className="displayBlock">
					{range(0, number).map((dumm, indexCol) =>
						<Square key={ indexCol }/>)}

				</div>)}
		</div>
	</div>;
};

export default Squares;

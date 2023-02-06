import React from 'react';
import InputBox from './InputBox';
import InputMargin from './InputMargin';
import Circles from './Circles';
import Squares from './Squares';

const Shapes = (context) =>
	<div className="container">
		<InputBox { ...context }/>
		<InputMargin { ...context }/>
		<Squares { ...context }/>
		<Circles { ...context }/>
	</div>;

export default Shapes;

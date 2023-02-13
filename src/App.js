import { React, useState, useEffect } from 'react';
import './App.scss';
import Inputs from './components/Inputs';
import Shapes from './components/Shapes';
import Ticker from './services/ticker';

const App = (context) => {
	const [state, setState]
	= useState({ shapeCount: 9, space: 2, shapeType: 'square', rotation: 0,
		visibility: 'block' });

	const extendedContext = { ...context, state, setState };

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => Ticker.start(extendedContext), []);

	return <div className="App">
		<Inputs { ...extendedContext }/>
		<Shapes { ...extendedContext }/>
	</div>;
};

export default App;

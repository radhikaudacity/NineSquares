import { React, useState } from 'react';
import './App.scss';
import Inputs from './components/Inputs';
import Shapes from './components/Shapes';

const App = (context) => {
	const [state, setState]
	= useState({ shapeCount: 9, space: 2, shapeType: 'square' });

	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Inputs { ...extendedContext }/>
		<Shapes { ...extendedContext }/>
	</div>;
};

export default App;

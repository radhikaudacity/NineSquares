import { React, useState, useEffect } from 'react';
import './App.scss';
import Inputs from './components/Inputs';
import Shapes from './components/Shapes';
import config from './core/config';

const App = (context) => {
	const [state, setState]
	= useState({ shapeCount: 9, space: 2, shapeType: 'square', rotAngle: 0 });

	const extendedContext = { ...context, state, setState };

	useEffect(() => {
		const interval = setInterval(() => {
			setState((prevState) =>
				({ ...prevState,
					rotAngle: prevState.rotAngle + config.increment }));
		}, config.delay);

		return () => clearInterval(interval);
	}, []);

	return <div className="App">
		<Inputs { ...extendedContext }/>
		<Shapes { ...extendedContext }/>
	</div>;
};

export default App;

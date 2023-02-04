import { React, useState } from 'react';
import './App.scss';
import Squares from './components/Squares';

const App = (context) => {
	const [state, setState] = useState({ number: 0 });

	return <div className="App">
		<Squares { ...{ ...context, state, setState } }/>

	</div>;
};

export default App;

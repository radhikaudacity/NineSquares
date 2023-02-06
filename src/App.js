import { React, useState } from 'react';
import './App.scss';
import Shapes from './components/Shapes';

const App = (context) => {
	const [state, setState] = useState({ number: 0 });

	return <div className="App">
		<Shapes { ...{ ...context, state, setState } }/>

	</div>;
};

export default App;

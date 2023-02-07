import React from 'react';
import DropDown from './DropDown';
import InputCount from './InputCount';
import InputSpace from './InputSpace';

const Inputs = (context) => <div>
	<p>Select the shape, number of shapes and the spacing </p>
	<DropDown { ...context }/>
	<InputCount { ...context }/>
	<InputSpace { ...context }/>
</div>;

export default Inputs;

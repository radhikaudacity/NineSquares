import React from 'react';

const Square = ({ key, movePosX, movePosY }) =>
	<div
		key={ key }
		style={ {
			position: 'absolute',
			left: `${ movePosX }px`,
			top: `${ movePosY }px`,
		} }
		className="innerBox "
	/>
	;

export default Square;

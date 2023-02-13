import { range } from '@laufire/utils/collection';
import { rndString } from '@laufire/utils/random';

const getCirclePosition = (
	shapeCount, index, space, rotAngle
) => {
	const multiplier = 50;
	const radius = multiplier * Number(space);
	const two = 2;
	const angle = (two * Math.PI / shapeCount) * index + rotAngle;
	const movePosY = radius * Math.sin(angle);
	const movePosX = radius * Math.cos(angle) ;

	return { movePosX, movePosY };
};

const getSquarePosition = (
	shapeCount, index, space
) => {
	const width = 50;
	const noOfRows = Math.round(Math.sqrt(shapeCount));
	const colNo = index % noOfRows;
	const rowNo = Math.floor(index / noOfRows);
	const totalWidth = width + Number(space);
	const movePosX = totalWidth * colNo ;
	const movePosY = totalWidth * rowNo ;

	return { movePosX, movePosY };
};

const getPositions = {
	square: getSquarePosition,
	circle: getCirclePosition,
};
const getBorderRadius = {
	square: '0',
	circle: '50%',
};

const createShapes = (context) => {
	const { state: { shapeCount, shapeType, space, rotation }} = context;

	const shapes = range(0, shapeCount).map((shape, index) =>
		({ id: rndString(),
			shapeType: shapeType,
			style: { left: `${ getPositions[shapeType](
				shapeCount, index, space, rotation
			).movePosX }px`,
			top: `${ getPositions[shapeType](
				shapeCount, index, space, rotation
			).movePosY }px`,
			borderRadius: ` ${ getBorderRadius[shapeType] }` }}));

	return shapes;
};

const changeRotation = ({ setState, config: { increment }}) =>
	setState((prevState) => ({
		...prevState,
		rotation: prevState.rotation + increment,
	}));

const blinkCounter = (context) => {
	const { setState } = context;

	setState((prevState) => ({
		...prevState,
		blinkCount: prevState.blinkCount + 1,
	}));
};

const blink = (context) => {
	const { config: { pattern }} = context;

	return patternDigit(context) === '1';
};
const patternDigit = ({ state: { blinkCount }, config: { pattern }}) =>
	pattern.substr(blinkCount % pattern.length, 1);

const ShapeManager = { createShapes, changeRotation, blinkCounter,
	blink, patternDigit };

export default ShapeManager;

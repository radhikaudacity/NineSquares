import { range } from '@laufire/utils/collection';

const getCirclePosition = (
	shapeCount, index, space
) => {
	const fifty = 50;
	const radius = fifty * Number(space);
	const two = 2;
	const offSetX = 500;
	const offSetY = 500;
	const theta = two * Math.PI / shapeCount;
	const movePosY = radius * Math.sin(theta * index) + offSetY;
	const movePosX = radius * Math.cos(theta * index) + +offSetX;

	return { movePosX, movePosY };
};

const getSquarePosition = (
	shapeCount, index, space
) => {
	const width = 50;
	const offSetX = 100;
	const offSetY = 100;
	const noOfRows = Math.round(Math.sqrt(shapeCount));
	const colNo = index % noOfRows;
	const rowNo = Math.floor(index / noOfRows);
	const movePosX = (width + Number(space)) * colNo + offSetX;
	const movePosY = (width + Number(space)) * rowNo + offSetY;

	return { movePosX, movePosY };
};

const getPosition = {
	square: getSquarePosition,
	circle: getCirclePosition,
};
const getBorderRadius = {
	square: '0',
	circle: '50%',
};

const createShapes = (context) => {
	const { state: { shapeCount, shapeType, space }} = context;

	const shapes = range(0, shapeCount).map((shape, index) =>
		({ shapeType: shapeType,
			left: `${ getPosition[shapeType](
				shapeCount, index, space
			).movePosX }px`,
			top: `${ getPosition[shapeType](
				shapeCount, index, space
			).movePosY }px`,
			borderRadius: ` ${ getBorderRadius[shapeType] }`,
			position: 'absolute',
			height: '50px',
			width: '50px',
			backgroundColor: 'aquamarine',
			border: '1px solid red' }));

	return shapes;
};

const ShapeManager = { createShapes };

export default ShapeManager;

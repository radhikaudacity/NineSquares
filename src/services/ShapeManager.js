import { range } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';
import { rndString } from '@laufire/utils/random';

const getCirclePosition = (
	shapeCount, index, space
) => {
	const fifty = 50;
	const radius = fifty * Number(space);
	const two = 2;
	const offSetX = 1000;
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
	const offSetX = 1000;
	const offSetY = 500;
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
		({ id: rndString(),
			shapeType: shapeType,
			style: { left: `${ getPosition[shapeType](
				shapeCount, index, space
			).movePosX }px`,
			top: `${ getPosition[shapeType](
				shapeCount, index, space
			).movePosY }px`,
			borderRadius: ` ${ getBorderRadius[shapeType] }` }}));

	peek(shapes);

	return shapes;
};

const ShapeManager = { createShapes };

export default ShapeManager;

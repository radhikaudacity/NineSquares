import { range } from '@laufire/utils/collection';

const getCirclePosition = (
	shapeCount, index, space
) => {
	const hundred = 100;
	const radius = hundred * Number(space);
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

const createShapes = (context) => {
	const { state: { shapeCount, shapeType, space }} = context;
	const getPosition = {
		square: getSquarePosition,
		circle: getCirclePosition,
	};

	const shapes = [];

	return range(0, shapeCount).map((shape, index) =>
		[...shapes, { shapeType: shapeType,
			shapeClass: shapeType,
			shapeX: getPosition[shapeType](
				shapeCount, index, space
			).movePosX,
			shapeY: getPosition[shapeType](
				shapeCount, index, space
			).movePosY }]);
};

const ShapeManager = { createShapes };

export default ShapeManager;

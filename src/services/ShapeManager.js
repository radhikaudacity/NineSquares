
const circlePosition = (count, index) => {
	const radius = 100;
	const two = 2;
	const offSetX = 500;
	const offSetY = 500;
	const theta = two * Math.PI / count;
	const movePosY = radius * Math.sin(theta * index) + offSetY;
	const movePosX = radius * Math.cos(theta * index) + +offSetX;

	return { movePosX, movePosY };
};

const squarePosition = (
	shapeCount, index, margin
) => {
	const width = 50;
	const noOfCol = Math.floor(Math.sqrt(shapeCount));
	const colNo = index % noOfCol;
	const rowNo = Math.floor(index / noOfCol);
	const movePosX = (width + margin) * colNo;
	const movePosY = (width + margin) * rowNo;

	return { movePosX, movePosY };
};
const ShapeManager = { circlePosition, squarePosition };

export default ShapeManager;

import ShapeManager from '../ShapeManager.js';

const masterLoop = [
	'changeRotation',
	'blinkCounter',

];
const runMasterLoop = (context) =>
	masterLoop.map((data) => ShapeManager[data](context));

const master = {
	runMasterLoop, masterLoop,
};

export default master;

import ShapeManager from '../ShapeManager.js';

const masterLoop = [
	'changeRotation',
	'blink',
];
const runMasterLoop = () =>
	masterLoop.map((data) => ShapeManager[data]());

const master = {
	runMasterLoop, masterLoop,
};

export default master;

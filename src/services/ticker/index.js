import MasterLoop from './masterLoop';
const start = (context) => {
	const { config } = context;
	const { tickerDelay } = config;

	setInterval(() => MasterLoop.runMasterLoop, tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;

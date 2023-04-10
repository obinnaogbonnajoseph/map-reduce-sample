const mapReduce = require('./map_reduce');
const generateLatencies = require('./generate_latencies');

function map(text) {
	const lines = text.split('\n');
	for (const line of lines) {
		const latency = parseInt(line);
		if (latency < 10000) {
			mapReduce.emitMapResult('under_10_seconds', 1);
		} else {
			mapReduce.emitMapResult('over_10_seconds', 1);
		}
	}
}

generateLatencies();
const mapInput = mapReduce.getMapInput('latencies.txt');
map(mapInput);

const fs = require('fs');

const HOST = process.env.HOST;

function generateLatencies() {
	let latencies = '';
	for (let i = 0; i < 100; i++) {
		latencies += Math.floor(Math.random() * (25000 - 1000 + 1) + 1000) + '\n';
	}

	fs.writeFileSync(`${HOST}/latencies.txt`, latencies, (err) => {
		if (err) throw err;
		console.log('Latencies saved to file!');
	});
};

module.exports.generateLatencies = generateLatencies;

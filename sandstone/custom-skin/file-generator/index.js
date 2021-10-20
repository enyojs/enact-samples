const {writeToFile} = require('./writeToFile');
const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
	const body = [];

	req.on('data', (chunk) => {
		body.push(chunk);
	});

	req.on('end', () => {
		// eslint-disable-next-line
		const finalBody = Buffer.concat(body)?.toString()?.split(':')[1]?.split('[')[1]?.split(']}')[0];
		let colors = finalBody.split(',');
		colors = colors.map(color => {
			if (color.length > 5) {
				return color.split('"')[1];
			} else {
				return color;
			}
		});
		writeToFile(colors);
	});

	res.setHeader('access-control-allow-origin', '*');
	res.statusCode = 202;
	res.end();
});

server.listen(port);

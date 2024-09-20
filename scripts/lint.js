/* eslint-disable no-console, no-shadow */
const process = require('process'),
	{readdirpPromise} = require('readdirp'),
	shell = require('shelljs'),
	path = require('path');

let error = false;

readdirpPromise('.', {depth: 2, directoryFilter: (di) => di.basename !== 'node_modules', fileFilter: 'package.json'})
	.then(files => {
		files.forEach(file => {
			if (file.path === 'package.json') {
				return;
			}

			const directory = path.dirname(file.fullPath);
			console.log(`Linting ${directory}`);
			shell.cd(directory);
			const result = shell.exec('npm run lint -- -- --report-unused-disable-directives --max-warnings 0', {silent: true});

			if (result.code !== 0) {
				console.log(`${file.fullPath} failed lint check: ${result.stdout}`);
				error = true;
			}
		});
	}).catch((err) => console.error(err));

process.on('exit', (code) => {
	if (!code && !error) {
		console.log('All clean!');
	}
	process.exit(code || error ? 1 : 0);
});

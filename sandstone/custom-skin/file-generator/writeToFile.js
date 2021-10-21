const fs = require('fs');

const writeToFile = (colors) => {
	const file = '.sandstone-theme {\n' +
		`	/* Skin Name: ${colors[0]} */\n` +
		`	background-color: ${colors[1].toUpperCase()}; /* Background Color */\n` +
		`	--sand-text-color: ${colors[2].toUpperCase()}; /* Normal Text Color */\n` +
		`	--sand-text-sub-color: ${colors[3].toUpperCase()}; /* Subtitle Text Color */\n` +
		`	--sand-focus-text-color-rgb: ${colors[4]}, ${colors[5]},` +
		` ${colors[6]}; /* Focused Text Color (Must be RGB comma separated format) */\n` +
		`	--sand-focus-bg-color: ${colors[7].toUpperCase()}; /* Focused Background Color */\n` +
		`	--sand-selected-color-rgb: ${colors[8]}, ${colors[9]}, ` +
		`${colors[10]}; /* Selected Color (Must be RGB comma separated format) */\n` +
		`	--sand-selected-bg-color: ${colors[11].toUpperCase()}; /* Selected Background Color */\n` +
		`	--sand-overlay-bg-color-rgb: ${colors[12]}, ${colors[13]}, ` +
		`${colors[14]}; /* Overlay Panel Background Color (Must be RGB comma separated format) */\n` +
		`	--sand-toggle-on-bg-color: ${colors[15].toUpperCase()}; /* Toggle On Background Color */\n` +
		`	--sand-toggle-off-color: ${colors[16].toUpperCase()}; /* Toggle Off Color */\n` +
		`	--sand-toggle-off-bg-color: ${colors[17].toUpperCase()}; /* Toggle Off Background Color */\n` +
		'}';
	fs.writeFileSync('custom_skin.css', file);
};

module.exports = {writeToFile};
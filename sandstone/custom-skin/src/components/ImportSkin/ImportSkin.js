import kind from '@enact/core/kind';
import platform from '@enact/core/platform';
import Dropdown from '@enact/sandstone/Dropdown';
import PropTypes from 'prop-types';

import componentCss from './ImportSkin.module.less';

const ImportSkin = kind({
	name: 'ImportSkin',

	propTypes: {
		colorPresets: PropTypes.array,
		setColorsImport: PropTypes.func,
		setColorsPreset: PropTypes.func
	},

	defaultProps: {
		colorPresets: [
			'Default Sandstone Theme',
			'Blue Color Set 1',
			'Blue Color Set 2',
			'Green Color Set 1',
			'Green Color Set 2',
			'Purple Color Set 1',
			'Purple Color Set 2',
			'Red Color Set 1',
			'Red Color Set 2'
		]
	},

	handlers:{
		handleClose: async (ev, {setColorsImport, setColorsPreset}) => {
			document.querySelector('#temporaryStylesheetImport')?.remove();
			switch (ev.data) {
				case 'Default Sandstone Theme': {
					setColorsPreset('defaultTheme');
					break;
				}
				case 'Blue Color Set 1': {
					setColorsPreset('blueColorSet1');
					break;
				}
				case 'Green Color Set 1': {
					setColorsPreset('greenColorSet1');
					break;
				}
				case 'Purple Color Set 1': {
					setColorsPreset('purpleColorSet1');
					break;
				}
				case 'Red Color Set 1': {
					setColorsPreset('redColorSet1');
					break;
				}
				case 'Blue Color Set 2': {
					setColorsPreset('blueColorSet2');
					break;
				}
				case 'Green Color Set 2': {
					setColorsPreset('greenColorSet2');
					break;
				}
				case 'Purple Color Set 2': {
					setColorsPreset('purpleColorSet2');
					break;
				}
				case 'Red Color Set 2': {
					setColorsPreset('redColorSet2');
					break;
				}
				case 'Import your own': {
					function inputHandler (inputEvent) {
						inputEvent.preventDefault();
						const reader = new window.FileReader();
						reader.onload = async (event) => {
							let text = (event.target.result).split('\n\t');
							text.shift();
							text = text.filter(string => {
								if (string[0] !== '/' || string.includes('/* Skin Name')) {
									return string;
								}
							});
							setColorsImport(text);
						};
						try {
							reader.readAsText(inputEvent.target.files[0]);
						} catch (err) {
							// eslint-disable-next-line
							console.log(err);
						}
					}

					const input = document.createElement('input');
					input.type = 'file';
					input.onchange = inputHandler;
					input.id = 'temporaryInput';
					input.click();
					break;
				}
				default: break;
			}
		},
		handleOpen: async () => {
			const sheet = document.createElement('style');
			sheet.id = 'temporaryStylesheetImport';
			sheet.innerHTML = `.sandstone-theme {
				--sand-selected-text-color: #E6E6E6;
				--sand-overlay-bg-color-rgb: 87, 94, 102;
				--sand-focus-bg-color: #E6E6E6;
				--sand-component-focus-text-color-rgb: 76, 80, 89;
				--sand-shadow-color-rgb: none;
			}`;
			document.body?.appendChild(sheet);

			setTimeout(() => {
				let dropdown = document.querySelector('[role="list"]');
				dropdown.style.color = '#E6E6E6';
			});
		}
	},

	computed: {
		size: () => {
			const width = window.innerWidth;

			if (window.screen.width <= 1920) {
				if (width < 1080) {
					return 'medium';
				} else if (width > 1080 && width < 1800) {
					return 'large';
				} else {
					return 'x-large';
				}
			} else if (window.screen.width > 1920) {
				if (width < 2160) {
					return 'medium';
				} else if ( width > 2160 && width < 3600) {
					return 'large';
				} else {
					return 'x-large';
				}
			}
		}
	},

	render:({colorPresets, handleClose, handleOpen, size}) => {
		return (
			<div className={componentCss.inputFile}>
				<Dropdown
					className={componentCss.presetDropdown}
					defaultSelected={0}
					onClose={handleClose}
					onOpen={handleOpen}
					width={size}
				>
					{platform.webos ? colorPresets : [...colorPresets, 'Import your own']}
				</Dropdown>
			</div>
		);
	}
});

export default ImportSkin;
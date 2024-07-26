import kind from '@enact/core/kind';
import platform from '@enact/core/platform';
import Dropdown from '@enact/sandstone/Dropdown';
import PropTypes from 'prop-types';

import componentCss from './ImportSkin.module.less';

/**
 * A component that contains the dropdown used for preset selection
 */
const ImportSkin = kind({
	name: 'ImportSkin',

	propTypes: {
		/**
		 * Setter function that interacts with the last option of the dropdown
		 * and sets the custom-skin from an external css file
		 *
		 * @type {Function}
		 * @required
		 * @public
		 */
		setColorsImport: PropTypes.func.isRequired,

		/**
		 * Setter function that changes the current preset for the skin
		 *
		 * @type {Function}
		 * @required
		 * @public
		 */
		setColorsPreset: PropTypes.func.isRequired,

		/**
		 * An array containing all the names for the dropdown except the last one
		 *
		 * @type {Array}
		 * @default [
		 *	'Default Sandstone Theme',
		 *	'Blue Color Set 1',
		 *	'Blue Color Set 2',
		 *	'Green Color Set 1',
		 *	'Green Color Set 2',
		 *	'Purple Color Set 1',
		 *	'Purple Color Set 2',
		 *	'Red Color Set 1',
		 *	'Red Color Set 2'
		 *	]
		 * @public
		 */
		colorPresets: PropTypes.array
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

	handlers: {
		// Function that handles what happens when the dropdown closes
		// If we chose all but the last option it will change the preset to the selected one.
		// It also removes some css styles included by the handleOpen handler.
		handleClose: async (ev, {setColorsImport, setColorsPreset}) => {
			if (typeof document !== 'undefined') {
				document.querySelector('#temporaryStylesheetImport')?.remove();
			}
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
				// If we chose the last option it will ask for a css file that it will scan and extract the skin
				// preset from (the file must have the same structure as the ones this app generates).
				case 'Import your own': {
					function inputHandler (inputEvent) {
						inputEvent.preventDefault();
						if (typeof window !== 'undefined') {
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
								throw new Error(err);
							}
						}
					}

					if (typeof document !== 'undefined') {
						const input = document.createElement('input');
						input.type = 'file';
						input.onchange = inputHandler;
						input.id = 'temporaryInput';
						input.click();
					}
					break;
				}
				default:
					break;
			}
		},

		// Opens the popup and appends some styles via javascript. The styles must be appended for the
		// non live demo components to have the basic sandstone appearance.
		handleOpen: async () => {
			if (typeof document !== 'undefined') {
				const sheet = document.createElement('style');
				sheet.id = 'temporaryStylesheetImport';
				sheet.innerHTML = `.sandstone-theme {
					--sand-component-focus-text-color-rgb: 76, 80, 89;
					--sand-focus-bg-color-rgb: 230, 230, 230;
					--sand-overlay-bg-color-rgb: 87, 94, 102;
					--sand-progress-bg-color-rgb: 55, 58, 65;
					--sand-progress-color-rgb: 230, 230, 230;
					--sand-selected-text-color: #E6E6E6;
					--sand-shadow-color-rgb: none;
				}`;
				document.body?.appendChild(sheet);

				setTimeout(() => {
					let dropdown = document.querySelector('[role="list"]');
					dropdown.style.color = '#E6E6E6';
				});
			}
		}
	},

	computed: {
		size: () => {
			if (typeof window !== 'undefined') {
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
					} else if (width > 2160 && width < 3600) {
						return 'large';
					} else {
						return 'x-large';
					}
				}
			}
		}
	},

	render: ({colorPresets, handleClose, handleOpen, size}) => {
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

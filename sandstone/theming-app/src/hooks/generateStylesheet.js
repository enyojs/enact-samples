import {hexToRGB} from './utils';

export const generateStylesheet = (backgroundColor, componentBackgroundColor, focusBackgroundColor, popupBackgroundColor, subTextColor, textColor, preset) => {
	const fbgRGB = hexToRGB(focusBackgroundColor).join(', ');
	const pbgRGB = hexToRGB(popupBackgroundColor).join(', ');
	const stRGB = hexToRGB(subTextColor).join(', ');
	const tRGB = hexToRGB(textColor).join(', ');
	// colors
	switch (preset) {
		case 'blueTheme1':
			return `.sandstone-theme {
			 	/* Skin Name: Blue 1; */
				--sand-bg-color: ${backgroundColor};
				--sand-text-color-rgb: ${tRGB};
				--sand-text-sub-color: ${subTextColor};
				--sand-shadow-color-rgb: 0, 0, 0;
				--sand-component-text-color-rgb: ${tRGB};
				--sand-component-text-sub-color-rgb: ${stRGB};
				--sand-component-bg-color: ${componentBackgroundColor};
				--sand-component-active-indicator-bg-color: ${focusBackgroundColor};
				--sand-component-inactive-indicator-bg-color: #9DA2A7;
				--sand-focus-text-color: #303030;
				--sand-focus-bg-color-rgb: ${fbgRGB};
				--sand-component-focus-text-color-rgb: 51, 51, 51;
				--sand-component-focus-active-indicator-bg-color: #4C5059;
				--sand-component-focus-inactive-indicator-bg-color: #B8B9BB;
				--sand-selected-color-rgb: ${tRGB};
				--sand-selected-text-color: #E6E6E6;
				--sand-selected-bg-color: #61688E;
				--sand-disabled-focus-bg-color: ${subTextColor};
				--sand-disabled-selected-color: #4C5059;
				--sand-disabled-selected-bg-color: #E7E7E7;
				--sand-disabled-selected-focus-color: #E7E7E7;
				--sand-disabled-selected-focus-bg-color: #4C5059;
				--sand-fullscreen-bg-color: #000000;
				--sand-overlay-bg-color-rgb: ${pbgRGB};
				--sand-selection-color: #4C5059;
				--sand-selection-bg-color: #3399FF;
				--sand-toggle-off-color: #AEAEAE;
				--sand-toggle-off-bg-color: #494949;
				--sand-toggle-on-color: ${focusBackgroundColor};
				--sand-toggle-on-bg-color: #61688E;
				--sand-progress-color-rgb: ${tRGB};
				--sand-progress-buffer-color: #6B6D73;
				--sand-progress-bg-color-rgb: 55, 58, 65;
				--sand-progress-highlighted-color: #FFFFFF;
				--sand-progress-slider-color: #8D9298;
				--sand-spinner-color-rgb: 255, 255, 255;
				--sand-checkbox-color: ${focusBackgroundColor};
				--sand-item-disabled-focus-bg-color: #E6E6E6;
				--sand-keyguide-bg-color-rgb: 107, 109, 115;
				--sand-slider-disabled-knob-bg-color: #666666;
				--sand-alert-overlay-bg-color-rgb: 202, 203, 204;
				--sand-alert-overlay-text-color-rgb: 46, 50, 57;
				--sand-alert-overlay-text-sub-color: #2E3239;
				--sand-alert-overlay-focus-text-color: #575E66;
				--sand-alert-overlay-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-disabled-selected-bg-color: #788688;
				--sand-alert-overlay-disabled-selected-focus-color: ${focusBackgroundColor};
				--sand-alert-overlay-disabled-selected-focus-bg-color: #4C5059;
				--sand-alert-overlay-progress-color-rgb: 107, 109, 115;
				--sand-alert-overlay-progress-bg-color-rgb: 161, 161, 161;
				--sand-alert-overlay-checkbox-color: #858B92;
				--sand-alert-overlay-checkbox-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-formcheckboxitem-focus-text-color: #575E66;
				--sand-alert-overlay-item-disabled-focus-bg-color: #989CA2;
			}`;
		case 'blueTheme2':
			return `.sandstone-theme {
				/* Skin Name: Blue 2; */
				--sand-bg-color: ${backgroundColor};
				--sand-text-color-rgb: ${tRGB};
				--sand-text-sub-color: ${subTextColor};
				--sand-shadow-color-rgb: 0, 0, 0;
				--sand-component-text-color-rgb: ${tRGB};
				--sand-component-text-sub-color-rgb: ${stRGB};
				--sand-component-bg-color: ${componentBackgroundColor};
				--sand-component-active-indicator-bg-color: ${focusBackgroundColor};
				--sand-component-inactive-indicator-bg-color: #9DA2A7;
				--sand-focus-text-color: #152DAC;
				--sand-focus-bg-color-rgb: ${fbgRGB};
				--sand-component-focus-text-color-rgb: 28, 49, 170;
				--sand-component-focus-active-indicator-bg-color: #4C5059;
				--sand-component-focus-inactive-indicator-bg-color: #B8B9BB;
				--sand-selected-color-rgb: ${tRGB};
				--sand-selected-text-color: #E6E6E6;
				--sand-selected-bg-color: #61688E;
				--sand-disabled-focus-bg-color: ${subTextColor};
				--sand-disabled-selected-color: #4C5059;
				--sand-disabled-selected-bg-color: #E7E7E7;
				--sand-disabled-selected-focus-color: #E7E7E7;
				--sand-disabled-selected-focus-bg-color: #4C5059;
				--sand-fullscreen-bg-color: #000000;
				--sand-overlay-bg-color-rgb: ${pbgRGB};
				--sand-selection-color: #4C5059;
				--sand-selection-bg-color: #3399FF;
				--sand-toggle-off-color: #787C90;
				--sand-toggle-off-bg-color: #444C73;
				--sand-toggle-on-color: ${focusBackgroundColor};
				--sand-toggle-on-bg-color: #7B84B2;
				--sand-progress-color-rgb: ${tRGB};
				--sand-progress-buffer-color: #6B6D73;
				--sand-progress-bg-color-rgb: 55, 58, 65;
				--sand-progress-highlighted-color: #FFFFFF;
				--sand-progress-slider-color: #8D9298;
				--sand-spinner-color-rgb: 255, 255, 255;
				--sand-checkbox-color: ${focusBackgroundColor};
				--sand-item-disabled-focus-bg-color: #E6E6E6;
				--sand-keyguide-bg-color-rgb: 107, 109, 115;
				--sand-slider-disabled-knob-bg-color: #666666;
				--sand-alert-overlay-bg-color-rgb: 202, 203, 204;
				--sand-alert-overlay-text-color-rgb: 46, 50, 57;
				--sand-alert-overlay-text-sub-color: #2E3239;
				--sand-alert-overlay-focus-text-color: #575E66;
				--sand-alert-overlay-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-disabled-selected-bg-color: #788688;
				--sand-alert-overlay-disabled-selected-focus-color: ${focusBackgroundColor};
				--sand-alert-overlay-disabled-selected-focus-bg-color: #4C5059;
				--sand-alert-overlay-progress-color-rgb: 107, 109, 115;
				--sand-alert-overlay-progress-bg-color-rgb: 161, 161, 161;
				--sand-alert-overlay-checkbox-color: #858B92;
				--sand-alert-overlay-checkbox-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-formcheckboxitem-focus-text-color: #575E66;
				--sand-alert-overlay-item-disabled-focus-bg-color: #989CA2;
			}`;
		case 'greenTheme1':
			return `.sandstone-theme {
				/* Skin Name: Green 1; */
				--sand-bg-color: ${backgroundColor};
				--sand-text-color-rgb: ${tRGB};
				--sand-text-sub-color: ${subTextColor};
				--sand-shadow-color-rgb: 0, 0, 0;
				--sand-component-text-color-rgb: ${tRGB};
				--sand-component-text-sub-color-rgb: ${stRGB};
				--sand-component-bg-color: ${componentBackgroundColor};
				--sand-component-active-indicator-bg-color: ${focusBackgroundColor};
				--sand-component-inactive-indicator-bg-color: #9DA2A7;
				--sand-focus-text-color: #303030;
				--sand-focus-bg-color-rgb: ${fbgRGB};
				--sand-component-focus-text-color-rgb: 51, 51, 51;
				--sand-component-focus-active-indicator-bg-color: #4C5059;
				--sand-component-focus-inactive-indicator-bg-color: #B8B9BB;
				--sand-selected-color-rgb: ${tRGB};
				--sand-selected-text-color: #E6E6E6;
				--sand-selected-bg-color: #61828E;
				--sand-disabled-focus-bg-color: ${subTextColor};
				--sand-disabled-selected-color: #4C5059;
				--sand-disabled-selected-bg-color: #E7E7E7;
				--sand-disabled-selected-focus-color: #E7E7E7;
				--sand-disabled-selected-focus-bg-color: #4C5059;
				--sand-fullscreen-bg-color: #000000;
				--sand-overlay-bg-color-rgb: ${pbgRGB};
				--sand-selection-color: #4C5059;
				--sand-selection-bg-color: #3399FF;
				--sand-toggle-off-color: #AEAEAE;
				--sand-toggle-off-bg-color: #494949;
				--sand-toggle-on-color: ${focusBackgroundColor};
				--sand-toggle-on-bg-color: #61828E;
				--sand-progress-color-rgb: ${tRGB};
				--sand-progress-buffer-color: #6B6D73;
				--sand-progress-bg-color-rgb: 55, 58, 65;
				--sand-progress-highlighted-color: #FFFFFF;
				--sand-progress-slider-color: #8D9298;
				--sand-spinner-color-rgb: 255, 255, 255;
				--sand-checkbox-color: ${focusBackgroundColor};
				--sand-item-disabled-focus-bg-color: #E6E6E6;
				--sand-keyguide-bg-color-rgb: 107, 109, 115;
				--sand-slider-disabled-knob-bg-color: #666666;
				--sand-alert-overlay-bg-color-rgb: 202, 203, 204;
				--sand-alert-overlay-text-color-rgb: 46, 50, 57;
				--sand-alert-overlay-text-sub-color: #2E3239;
				--sand-alert-overlay-focus-text-color: #575E66;
				--sand-alert-overlay-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-disabled-selected-bg-color: #788688;
				--sand-alert-overlay-disabled-selected-focus-color: ${focusBackgroundColor};
				--sand-alert-overlay-disabled-selected-focus-bg-color: #4C5059;
				--sand-alert-overlay-progress-color-rgb: 107, 109, 115;
				--sand-alert-overlay-progress-bg-color-rgb: 161, 161, 161;
				--sand-alert-overlay-checkbox-color: #858B92;
				--sand-alert-overlay-checkbox-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-formcheckboxitem-focus-text-color: #575E66;
				--sand-alert-overlay-item-disabled-focus-bg-color: #989CA2;
			}`;
		case 'greenTheme2':
			return `.sandstone-theme {
				/* Skin Name: Green 2; */
				--sand-bg-color: ${backgroundColor};
				--sand-text-color-rgb: ${tRGB};
				--sand-text-sub-color: ${subTextColor};
				--sand-shadow-color-rgb: 0, 0, 0;
				--sand-component-text-color-rgb: ${tRGB};
				--sand-component-text-sub-color-rgb: ${stRGB};
				--sand-component-bg-color: ${componentBackgroundColor};
				--sand-component-active-indicator-bg-color: ${focusBackgroundColor};
				--sand-component-inactive-indicator-bg-color: #9DA2A7;
				--sand-focus-text-color: #02435F;
				--sand-focus-bg-color-rgb: ${fbgRGB};
				--sand-component-focus-text-color-rgb: 8, 69, 95;
				--sand-component-focus-active-indicator-bg-color: #4C5059;
				--sand-component-focus-inactive-indicator-bg-color: #B8B9BB;
				--sand-selected-color-rgb: ${tRGB};
				--sand-selected-text-color: #E6E6E6;
				--sand-selected-bg-color: #61828E;
				--sand-disabled-focus-bg-color: ${subTextColor};
				--sand-disabled-selected-color: #4C5059;
				--sand-disabled-selected-bg-color: #E7E7E7;
				--sand-disabled-selected-focus-color: #E7E7E7;
				--sand-disabled-selected-focus-bg-color: #4C5059;
				--sand-fullscreen-bg-color: #000000;
				--sand-overlay-bg-color-rgb: ${pbgRGB};
				--sand-selection-color: #4C5059;
				--sand-selection-bg-color: #3399FF;
				--sand-toggle-off-color: #6F7E84;
				--sand-toggle-off-bg-color: #31505B;
				--sand-toggle-on-color: ${focusBackgroundColor};
				--sand-toggle-on-bg-color: #6B95A4;
				--sand-progress-color-rgb: ${tRGB};
				--sand-progress-buffer-color: #6B6D73;
				--sand-progress-bg-color-rgb: 55, 58, 65;
				--sand-progress-highlighted-color: #FFFFFF;
				--sand-progress-slider-color: #8D9298;
				--sand-spinner-color-rgb: 255, 255, 255;
				--sand-checkbox-color: ${focusBackgroundColor};
				--sand-item-disabled-focus-bg-color: #E6E6E6;
				--sand-keyguide-bg-color-rgb: 107, 109, 115;
				--sand-slider-disabled-knob-bg-color: #666666;
				--sand-alert-overlay-bg-color-rgb: 202, 203, 204;
				--sand-alert-overlay-text-color-rgb: 46, 50, 57;
				--sand-alert-overlay-text-sub-color: #2E3239;
				--sand-alert-overlay-focus-text-color: #575E66;
				--sand-alert-overlay-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-disabled-selected-bg-color: #788688;
				--sand-alert-overlay-disabled-selected-focus-color: ${focusBackgroundColor};
				--sand-alert-overlay-disabled-selected-focus-bg-color: #4C5059;
				--sand-alert-overlay-progress-color-rgb: 107, 109, 115;
				--sand-alert-overlay-progress-bg-color-rgb: 161, 161, 161;
				--sand-alert-overlay-checkbox-color: #858B92;
				--sand-alert-overlay-checkbox-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-formcheckboxitem-focus-text-color: #575E66;
				--sand-alert-overlay-item-disabled-focus-bg-color: #989CA2;
			}`;
		case 'purpleTheme1':
			return `.sandstone-theme {
				/* Skin Name: Purple 1; */
				--sand-bg-color: ${backgroundColor};
				--sand-text-color-rgb: ${tRGB};
				--sand-text-sub-color: ${subTextColor};
				--sand-shadow-color-rgb: 0, 0, 0;
				--sand-component-text-color-rgb: ${tRGB};
				--sand-component-text-sub-color-rgb: ${stRGB};
				--sand-component-bg-color: ${componentBackgroundColor};
				--sand-component-active-indicator-bg-color: ${focusBackgroundColor};
				--sand-component-inactive-indicator-bg-color: #9DA2A7;
				--sand-focus-text-color: #303030;
				--sand-focus-bg-color-rgb: ${fbgRGB};
				--sand-component-focus-text-color-rgb: 51, 51, 51;
				--sand-component-focus-active-indicator-bg-color: #4C5059;
				--sand-component-focus-inactive-indicator-bg-color: #B8B9BB;
				--sand-selected-color-rgb: ${tRGB};
				--sand-selected-text-color: #E6E6E6;
				--sand-selected-bg-color: #75518E;
				--sand-disabled-focus-bg-color: ${subTextColor};
				--sand-disabled-selected-color: #4C5059;
				--sand-disabled-selected-bg-color: #E7E7E7;
				--sand-disabled-selected-focus-color: #E7E7E7;
				--sand-disabled-selected-focus-bg-color: #4C5059;
				--sand-fullscreen-bg-color: #000000;
				--sand-overlay-bg-color-rgb: ${pbgRGB};
				--sand-selection-color: #4C5059;
				--sand-selection-bg-color: #3399FF;
				--sand-toggle-off-color: #AEAEAE;
				--sand-toggle-off-bg-color: #494949;
				--sand-toggle-on-color: ${focusBackgroundColor};
				--sand-toggle-on-bg-color: #755183;
				--sand-progress-color-rgb: ${tRGB};
				--sand-progress-buffer-color: #6B6D73;
				--sand-progress-bg-color-rgb: 55, 58, 65;
				--sand-progress-highlighted-color: #FFFFFF;
				--sand-progress-slider-color: #8D9298;
				--sand-spinner-color-rgb: 255, 255, 255;
				--sand-checkbox-color: ${focusBackgroundColor};
				--sand-item-disabled-focus-bg-color: #E6E6E6;
				--sand-keyguide-bg-color-rgb: 107, 109, 115;
				--sand-slider-disabled-knob-bg-color: #666666;
				--sand-alert-overlay-bg-color-rgb: 107, 109, 115;
				--sand-alert-overlay-text-color-rgb: 46, 50, 57;
				--sand-alert-overlay-text-sub-color: #2E3239;
				--sand-alert-overlay-focus-text-color: #575E66;
				--sand-alert-overlay-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-disabled-selected-bg-color: #788688;
				--sand-alert-overlay-disabled-selected-focus-color: ${focusBackgroundColor};
				--sand-alert-overlay-disabled-selected-focus-bg-color: #4C5059;
				--sand-alert-overlay-progress-color-rgb: 107, 109, 115;
				--sand-alert-overlay-progress-bg-color-rgb: 161, 161, 161;
				--sand-alert-overlay-checkbox-color: #858B92;
				--sand-alert-overlay-checkbox-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-formcheckboxitem-focus-text-color: #575E66;
				--sand-alert-overlay-item-disabled-focus-bg-color: #989CA2;
			}`;
		case 'purpleTheme2':
			return `.sandstone-theme {
				/* Skin Name: Purple 2; */
				--sand-bg-color: ${backgroundColor};
				--sand-text-color-rgb: ${tRGB};
				--sand-text-sub-color: ${subTextColor};
				--sand-shadow-color-rgb: 0, 0, 0;
				--sand-component-text-color-rgb: ${tRGB};
				--sand-component-text-sub-color-rgb: 171, 174, 179;
				--sand-component-bg-color: ${componentBackgroundColor};
				--sand-component-active-indicator-bg-color: ${focusBackgroundColor};
				--sand-component-inactive-indicator-bg-color: #9DA2A7;
				--sand-focus-text-color: #FFFFFF;
				--sand-focus-bg-color-rgb: ${fbgRGB};
				--sand-component-focus-text-color-rgb: 77, 25, 142;
				--sand-component-focus-active-indicator-bg-color: #4C5059;
				--sand-component-focus-inactive-indicator-bg-color: #B8B9BB;
				--sand-selected-color-rgb: ${tRGB};
				--sand-selected-text-color: #E6E6E6;
				--sand-selected-bg-color: #76618E;
				--sand-disabled-focus-bg-color: #ABAEB3;
				--sand-disabled-selected-color: #4C5059;
				--sand-disabled-selected-bg-color: #E7E7E7;
				--sand-disabled-selected-focus-color: #E7E7E7;
				--sand-disabled-selected-focus-bg-color: #4C5059;
				--sand-fullscreen-bg-color: #000000;
				--sand-overlay-bg-color-rgb: ${pbgRGB};
				--sand-selection-color: #4C5059;
				--sand-selection-bg-color: #3399FF;
				--sand-toggle-off-color: #80778C;
				--sand-toggle-off-bg-color: #54416C;
				--sand-toggle-on-color: ${focusBackgroundColor};
				--sand-toggle-on-bg-color: #8A75A2;
				--sand-progress-color-rgb: ${tRGB};
				--sand-progress-buffer-color: #6B6D73;
				--sand-progress-bg-color-rgb: 55, 58, 65;
				--sand-progress-highlighted-color: #FFFFFF;
				--sand-progress-slider-color: #8D9298;
				--sand-spinner-color-rgb: 255, 255, 255;
				--sand-checkbox-color: ${focusBackgroundColor};
				--sand-item-disabled-focus-bg-color: #E6E6E6;
				--sand-keyguide-bg-color-rgb: 107, 109, 115;
				--sand-slider-disabled-knob-bg-color: #666666;
				--sand-alert-overlay-bg-color-rgb: 202, 203, 204;
				--sand-alert-overlay-text-color-rgb: 46, 50, 57;
				--sand-alert-overlay-text-sub-color: #2E3239;
				--sand-alert-overlay-focus-text-color: #575E66;
				--sand-alert-overlay-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-disabled-selected-bg-color: #788688;
				--sand-alert-overlay-disabled-selected-focus-color: ${focusBackgroundColor};
				--sand-alert-overlay-disabled-selected-focus-bg-color: #4C5059;
				--sand-alert-overlay-progress-color-rgb: 107, 109, 115;
				--sand-alert-overlay-progress-bg-color-rgb: 161, 161, 161;
				--sand-alert-overlay-checkbox-color: #858B92;
				--sand-alert-overlay-checkbox-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-formcheckboxitem-focus-text-color: #575E66;
				--sand-alert-overlay-item-disabled-focus-bg-color: #989CA2;
			}`;
		case 'redTheme1':
			return `.sandstone-theme {
				/* Skin Name: Red 1; */
				--sand-bg-color: ${backgroundColor};
				--sand-text-color-rgb: ${tRGB};
				--sand-text-sub-color: ${subTextColor};
				--sand-shadow-color-rgb: 0, 0, 0;
				--sand-component-text-color-rgb: ${tRGB};
				--sand-component-text-sub-color-rgb: ${stRGB};
				--sand-component-bg-color: ${componentBackgroundColor};
				--sand-component-active-indicator-bg-color: ${focusBackgroundColor};
				--sand-component-inactive-indicator-bg-color: #9DA2A7;
				--sand-focus-text-color: #303030;
				--sand-focus-bg-color-rgb: ${fbgRGB};
				--sand-component-focus-text-color-rgb: 51, 51, 51;
				--sand-component-focus-active-indicator-bg-color: #4C5059;
				--sand-component-focus-inactive-indicator-bg-color: #B8B9BB;
				--sand-selected-color-rgb: ${tRGB};
				--sand-selected-text-color: #E6E6E6;
				--sand-selected-bg-color: #8E6161;
				--sand-disabled-focus-bg-color: ${subTextColor};
				--sand-disabled-selected-color: #4C5059;
				--sand-disabled-selected-bg-color: #E7E7E7;
				--sand-disabled-selected-focus-color: #E7E7E7;
				--sand-disabled-selected-focus-bg-color: #4C5059;
				--sand-fullscreen-bg-color: #000000;
				--sand-overlay-bg-color-rgb: ${pbgRGB};
				--sand-selection-color: #4C5059;
				--sand-selection-bg-color: #3399FF;
				--sand-toggle-off-color: #AEAEAE;
				--sand-toggle-off-bg-color: #494949;
				--sand-toggle-on-color: ${focusBackgroundColor};
				--sand-toggle-on-bg-color: #8E6161;
				--sand-progress-color-rgb: ${tRGB};
				--sand-progress-buffer-color: #6B6D73;
				--sand-progress-bg-color-rgb: 55, 58, 65;
				--sand-progress-highlighted-color: #FFFFFF;
				--sand-progress-slider-color: #8D9298;
				--sand-spinner-color-rgb: 255, 255, 255;
				--sand-checkbox-color: ${focusBackgroundColor};
				--sand-item-disabled-focus-bg-color: #E6E6E6;
				--sand-keyguide-bg-color-rgb: 107, 109, 115;
				--sand-slider-disabled-knob-bg-color: #666666;
				--sand-alert-overlay-bg-color-rgb: 202, 203, 204;
				--sand-alert-overlay-text-color-rgb: 46, 50, 57;
				--sand-alert-overlay-text-sub-color: #2E3239;
				--sand-alert-overlay-focus-text-color: #575E66;
				--sand-alert-overlay-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-disabled-selected-bg-color: #788688;
				--sand-alert-overlay-disabled-selected-focus-color: ${focusBackgroundColor};
				--sand-alert-overlay-disabled-selected-focus-bg-color: #4C5059;
				--sand-alert-overlay-progress-color-rgb: 107, 109, 115;
				--sand-alert-overlay-progress-bg-color-rgb: 161, 161, 161;
				--sand-alert-overlay-checkbox-color: #858B92;
				--sand-alert-overlay-checkbox-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-formcheckboxitem-focus-text-color: #575E66;
				--sand-alert-overlay-item-disabled-focus-bg-color: #989CA2;
			}`;
		case 'redTheme2':
			return `.sandstone-theme {
				/* Skin Name: Red 2; */
				--sand-bg-color: ${backgroundColor};
				--sand-text-color-rgb: ${tRGB};
				--sand-text-sub-color: ${subTextColor};
				--sand-shadow-color-rgb: 0, 0, 0;
				--sand-component-text-color-rgb: ${tRGB};
				--sand-component-text-sub-color-rgb: 171, 174, 179;
				--sand-component-bg-color: ${componentBackgroundColor};
				--sand-component-active-indicator-bg-color: ${focusBackgroundColor};
				--sand-component-inactive-indicator-bg-color: #9DA2A7;
				--sand-focus-text-color: #851919;
				--sand-focus-bg-color-rgb: ${fbgRGB};
				--sand-component-focus-text-color-rgb: 132, 31, 31;
				--sand-component-focus-active-indicator-bg-color: #4C5059;
				--sand-component-focus-inactive-indicator-bg-color: #B8B9BB;
				--sand-selected-color-rgb: ${tRGB};
				--sand-selected-text-color: #E6E6E6;
				--sand-selected-bg-color: #8E6161;
				--sand-disabled-focus-bg-color: #ABAEB3;
				--sand-disabled-selected-color: #4C5059;
				--sand-disabled-selected-bg-color: #E7E7E7;
				--sand-disabled-selected-focus-color: #E7E7E7;
				--sand-disabled-selected-focus-bg-color: #4C5059;
				--sand-fullscreen-bg-color: #000000;
				--sand-overlay-bg-color-rgb: ${pbgRGB};
				--sand-selection-color: #4C5059;
				--sand-selection-bg-color: #3399FF;
				--sand-toggle-off-color: #927A7A;
				--sand-toggle-off-bg-color: #784747;
				--sand-toggle-on-color: ${focusBackgroundColor};
				--sand-toggle-on-bg-color: #BB7D7D;
				--sand-progress-color-rgb: ${tRGB};
				--sand-progress-buffer-color: #6B6D73;
				--sand-progress-bg-color-rgb: 55, 58, 65;
				--sand-progress-highlighted-color: #FFFFFF;
				--sand-progress-slider-color: #8D9298;
				--sand-spinner-color-rgb: 255, 255, 255;
				--sand-checkbox-color: ${focusBackgroundColor};
				--sand-item-disabled-focus-bg-color: #E6E6E6;
				--sand-keyguide-bg-color-rgb: 107, 109, 115;
				--sand-slider-disabled-knob-bg-color: #666666;
				--sand-alert-overlay-bg-color-rgb: 202, 203, 204;
				--sand-alert-overlay-text-color-rgb: 46, 50, 57;
				--sand-alert-overlay-text-sub-color: #2E3239;
				--sand-alert-overlay-focus-text-color: #575E66;
				--sand-alert-overlay-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-disabled-selected-bg-color: #788688;
				--sand-alert-overlay-disabled-selected-focus-color: ${focusBackgroundColor};
				--sand-alert-overlay-disabled-selected-focus-bg-color: #4C5059;
				--sand-alert-overlay-progress-color-rgb: 107, 109, 115;
				--sand-alert-overlay-progress-bg-color-rgb: 161, 161, 161;
				--sand-alert-overlay-checkbox-color: #858B92;
				--sand-alert-overlay-checkbox-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-formcheckboxitem-focus-text-color: #575E66;
				--sand-alert-overlay-item-disabled-focus-bg-color: #989CA2;
			}`;
		default:
			return `.sandstone-theme {
				/* Skin Name: Default; */
				--sand-bg-color: ${backgroundColor};
				--sand-text-color-rgb: ${tRGB};
				--sand-text-sub-color: ${subTextColor};
				--sand-shadow-color-rgb: 0, 0, 0;
				--sand-component-text-color-rgb: ${tRGB};
				--sand-component-text-sub-color-rgb: ${stRGB};
				--sand-component-bg-color: ${componentBackgroundColor};
				--sand-component-active-indicator-bg-color: ${focusBackgroundColor};
				--sand-component-inactive-indicator-bg-color: #9DA2A7;
				--sand-focus-text-color: #FFFFFF;
				--sand-focus-bg-color-rgb: ${fbgRGB};
				--sand-component-focus-text-color-rgb: 76, 80, 89;
				--sand-component-focus-active-indicator-bg-color: #4C5059;
				--sand-component-focus-inactive-indicator-bg-color: #B8B9BB;
				--sand-selected-color-rgb: ${tRGB};
				--sand-selected-text-color: #E6E6E6;
				--sand-selected-bg-color: #3E454D;
				--sand-disabled-focus-bg-color: ${subTextColor};
				--sand-disabled-selected-color: #4C5059;
				--sand-disabled-selected-bg-color: #E6E6E6;
				--sand-disabled-selected-focus-color: #E6E6E6;
				--sand-disabled-selected-focus-bg-color: #4C5059;
				--sand-fullscreen-bg-color: #000000;
				--sand-overlay-bg-color-rgb: ${pbgRGB};
				--sand-selection-color: #4C5059;
				--sand-selection-bg-color: #3399FF;
				--sand-toggle-off-color: #AEAEAE;
				--sand-toggle-off-bg-color: #777777;
				--sand-toggle-on-color: ${focusBackgroundColor};
				--sand-toggle-on-bg-color: #30AD6B;
				--sand-progress-color-rgb: ${tRGB};
				--sand-progress-buffer-color: #6B6D73;
				--sand-progress-bg-color-rgb: 55, 58, 65;
				--sand-progress-highlighted-color: #FFFFFF;
				--sand-progress-slider-color: #8D9298;
				--sand-spinner-color-rgb: 255, 255, 255;
				--sand-checkbox-color: ${focusBackgroundColor};
				--sand-item-disabled-focus-bg-color: #E6E6E6;
				--sand-keyguide-bg-color-rgb: 55, 58, 65;
				--sand-slider-disabled-knob-bg-color: #666666;
				--sand-alert-overlay-bg-color-rgb: 202, 203, 204;
				--sand-alert-overlay-text-color-rgb: 46, 50, 57;
				--sand-alert-overlay-text-sub-color: #2E3239;
				--sand-alert-overlay-focus-text-color: #575E66;
				--sand-alert-overlay-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-disabled-selected-bg-color: #788688;
				--sand-alert-overlay-disabled-selected-focus-color: ${focusBackgroundColor};
				--sand-alert-overlay-disabled-selected-focus-bg-color: #4C5059;
				--sand-alert-overlay-progress-color-rgb: 55, 58, 65;
				--sand-alert-overlay-progress-bg-color-rgb: 161, 161, 161;
				--sand-alert-overlay-checkbox-color: #858B92;
				--sand-alert-overlay-checkbox-disabled-selected-color: #FFFFFF;
				--sand-alert-overlay-formcheckboxitem-focus-text-color: #575E66;
				--sand-alert-overlay-item-disabled-focus-bg-color: #989CA2;
			}`;
	}
};

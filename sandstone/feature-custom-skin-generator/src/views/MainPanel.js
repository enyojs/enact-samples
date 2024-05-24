/* eslint-disable react/jsx-no-bind */

import Alert from '@enact/sandstone/Alert';
import BodyText from '@enact/sandstone/BodyText';
import Button from '@enact/sandstone/Button';
import CheckboxItem from '@enact/sandstone/CheckboxItem';
import Dropdown from '@enact/sandstone/Dropdown';
import Heading from '@enact/sandstone/Heading';
import Popup from '@enact/sandstone/Popup';
import RangePicker from '@enact/sandstone/RangePicker';
import Scroller from '@enact/sandstone/Scroller';
import Slider from '@enact/sandstone/Slider';
import Switch from '@enact/sandstone/Switch';
import SwitchItem from '@enact/sandstone/SwitchItem';
import TooltipDecorator from '@enact/sandstone/TooltipDecorator';
import {Cell, Column, Layout, Row} from '@enact/ui/Layout';
import {useCallback, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import AutoPopup from '../components/AutoPopup/AutoPopup';
import ColorFields from '../components/ColorFields/ColorFields';
import ImportSkin from '../components/ImportSkin/ImportSkin';
import OutputField from '../components/OutputField/OutputField';

import {presets} from '../constants';

import {
	convertHexToRGB,
	convertRGBToHex,
	generateColors,
	generateCSS,
	getColorsFromString,
	hexColors
} from '../utils';

import styles from '../common/styles.module.less';
import * as css from './MainPanel.module.less';

const TooltipButton = TooltipDecorator({tooltipDestinationProp: 'decoration'}, Button);

function scrollTo (ref) {
	scrollTo = ref; //eslint-disable-line
}

const MainPanel = () => {
	const [skinName, setSkinName] = useState('');

	// All the colors to be used by the app
	const [BGColor, setBGColor] = useState('#000000');
	const [TextColorRGB, setTextColorRGB] = useState('#E6E6E6');
	const [TextSubColor, setTextSubColor] = useState('#ABAEB3');
	const [ShadowColorRGB, setShadowColorRGB] = useState('#000000');
	const [ComponentTextColorRGB, setComponentTextColorRGB] = useState('#E6E6E6');
	const [ComponentTextSubColorRGB, setComponentTextSubColorRGB] = useState('#ABAEB3');
	const [ComponentBGColor, setComponentBGColor] = useState('#7D848C');
	const [ComponentActiveIndicatorBgColor, setComponentActiveIndicatorBgColor] = useState('#E6E6E6');
	const [ComponentInactiveIndicatorBgColor, setComponentInactiveIndicatorBgColor] = useState('#9DA2A7');
	const [FocusTextColor, setFocusTextColor] = useState('#FFFFFF');
	const [FocusBGColorRGB, setFocusBGColorRGB] = useState('#E6E6E6');
	const [ComponentFocusTextColorRGB, setComponentFocusTextColorRGB] = useState('#4C5059');
	const [ComponentFocusActiveIndicatorBgColor, setComponentFocusActiveIndicatorBgColor] = useState('#4C5059');
	const [ComponentFocusInactiveIndicatorBgColor, setComponentFocusInactiveIndicatorBgColor] = useState('#B8B9BB');
	const [SelectedColorRGB, setSelectedColorRGB] = useState('#E6E6E6');
	const [SelectedTextColor, setSelectedTextColor] = useState('#E6E6E6');
	const [SelectedBGColor, setSelectedBGColor] = useState('#3E454D');
	const [DisabledFocusBGColor, setDisabledFocusBGColor] = useState('#ABAEB3');
	const [DisabledSelectedColor, setDisabledSelectedColor] = useState('#4C5059');
	const [DisabledSelectedBGColor, setDisabledSelectedBgColor] = useState('#E6E6E6');
	const [DisabledSelectedFocusColor, setDisabledSelectedFocusColor] = useState('#E6E6E6');
	const [DisabledSelectedFocusBGColor, setDisabledSelectedFocusBGColor] = useState('#4C5059');
	const [FullscreenBGColor, setFullscreenBGColor] = useState('#000000');
	const [OverlayBGColorRGB, setOverlayBGColorRGB] = useState('#575E66');
	const [SelectionColor, setSelectionColor] = useState('#4C5059');
	const [SelectionBGColor, setSelectionBGColor] = useState('#3399FF');
	const [ToggleOffColor, setToggleOffColor] = useState('#AEAEAE');
	const [ToggleOffBGColor, setToggleOffBGColor] = useState('#777777');
	const [ToggleOnColor, setToggleOnColor] = useState('#E6E6E6');
	const [ToggleOnBGColor, setToggleOnBGColor] = useState('#30AD6B');
	const [ProgressColorRGB, setProgressColorRGB] = useState('#E6E6E6');
	const [ProgressBufferColor, setProgressBufferColor] = useState('#6B6D73');
	const [ProgressBGColorRGB, setProgressBGColorRGB] = useState('#373A41');
	const [ProgressHighlightedColor, setProgressHighlightedColor] = useState('#FFFFFF');
	const [ProgressSliderColor, setProgressSliderColor] = useState('#8D9298');
	const [SpinnerColorRGB, setSpinnerColorRGB] = useState('#FFFFFF');
	const [CheckboxColor, setCheckboxColor] = useState('#E6E6E6');
	const [ItemDisabledFocusBGColor, setItemDisabledFocusBGColor] = useState('#E6E6E6');
	const [KeyguideBGColorRGB, setKeyguideBGColorRGB] = useState('#373A41');
	const [SliderDisabledKnobBgColor, setSliderDisabledKnobBgColor] = useState('#666666');
	const [AlertOverlayBGColorRGB, setAlertOverlayBGColorRGB] = useState('#CACBCC');
	const [AlertOverlayTextColorRGB, setAlertOverlayTextColorRGB] = useState('#2E3239');
	const [AlertOverlayTextSubColor, setAlertOverlayTextSubColor] = useState('#2E3239');
	const [AlertOverlayFocusTextColor, setAlertOverlayFocusTextColor] = useState('#575E66');
	const [AlertOverlayDisabledSelectedColor, setAlertOverlayDisabledSelectedColor] = useState('#FFFFFF');
	const [AlertOverlayDisabledSelectedBGColor, setAlertOverlayDisabledSelectedBGColor] = useState('#788688');
	const [AlertOverlayDisabledSelectedFocusColor, setAlertOverlayDisabledSelectedFocusColor] = useState('#E6E6E6');
	const [AlertOverlayDisabledSelectedFocusBGColor, setAlertOverlayDisabledSelectedFocusBGColor] = useState('#4C5059');
	const [AlertOverlayProgressColorRGB, setAlertOverlayProgressColorRGB] = useState('#373A41');
	const [AlertOverlayProgressBGColorRGB, setAlertOverlayProgressBGColorRGB] = useState('#A1A1A1');
	const [AlertOverlayCheckboxColor, setAlertOverlayCheckboxColor] = useState('#858B92');
	const [AlertOverlayCheckboxDisabledSelectedColor, setAlertOverlayCheckboxDisabledSelectedColor] = useState('#FFFFFF');
	const [AlertOverlayFormcheckboxitemFocusTextColor, setAlertOverlayFormcheckboxitemFocusTextColor] = useState('#575E66');
	const [AlertOverlayItemDisabledFocusBGColor, setAlertOverlayItemDisabledFocusBGColor] = useState('#989CA2');

	// Array containing all the values for our colors
	const colors = [BGColor, TextColorRGB, TextSubColor, ShadowColorRGB, ComponentTextColorRGB, ComponentTextSubColorRGB, ComponentBGColor, ComponentActiveIndicatorBgColor,
		ComponentInactiveIndicatorBgColor, FocusTextColor, FocusBGColorRGB, ComponentFocusTextColorRGB, ComponentFocusActiveIndicatorBgColor, ComponentFocusInactiveIndicatorBgColor,
		SelectedColorRGB, SelectedTextColor, SelectedBGColor, DisabledFocusBGColor, DisabledSelectedColor, DisabledSelectedBGColor, DisabledSelectedFocusColor,
		DisabledSelectedFocusBGColor, FullscreenBGColor, OverlayBGColorRGB, SelectionColor, SelectionBGColor, ToggleOffColor, ToggleOffBGColor, ToggleOnColor, ToggleOnBGColor,
		ProgressColorRGB, ProgressBufferColor, ProgressBGColorRGB, ProgressHighlightedColor, ProgressSliderColor, SpinnerColorRGB, CheckboxColor, ItemDisabledFocusBGColor, KeyguideBGColorRGB, SliderDisabledKnobBgColor, AlertOverlayBGColorRGB,
		AlertOverlayTextColorRGB, AlertOverlayTextSubColor, AlertOverlayFocusTextColor, AlertOverlayDisabledSelectedColor, AlertOverlayDisabledSelectedBGColor,
		AlertOverlayDisabledSelectedFocusColor, AlertOverlayDisabledSelectedFocusBGColor, AlertOverlayProgressColorRGB, AlertOverlayProgressBGColorRGB, AlertOverlayCheckboxColor,
		AlertOverlayCheckboxDisabledSelectedColor, AlertOverlayFormcheckboxitemFocusTextColor, AlertOverlayItemDisabledFocusBGColor
	];

	// Array containing all the setter functions for our colors
	const setColors = [setBGColor, setTextColorRGB, setTextSubColor, setShadowColorRGB, setComponentTextColorRGB, setComponentTextSubColorRGB, setComponentBGColor, setComponentActiveIndicatorBgColor,
		setComponentInactiveIndicatorBgColor, setFocusTextColor, setFocusBGColorRGB,
		setComponentFocusTextColorRGB, setComponentFocusActiveIndicatorBgColor, setComponentFocusInactiveIndicatorBgColor, setSelectedColorRGB, setSelectedTextColor, setSelectedBGColor, setDisabledFocusBGColor, setDisabledSelectedColor,
		setDisabledSelectedBgColor, setDisabledSelectedFocusColor, setDisabledSelectedFocusBGColor, setFullscreenBGColor, setOverlayBGColorRGB,
		setSelectionColor, setSelectionBGColor, setToggleOffColor, setToggleOffBGColor, setToggleOnColor, setToggleOnBGColor, setProgressColorRGB, setProgressBufferColor,
		setProgressBGColorRGB, setProgressHighlightedColor, setProgressSliderColor, setSpinnerColorRGB, setCheckboxColor, setItemDisabledFocusBGColor, setKeyguideBGColorRGB, setSliderDisabledKnobBgColor, setAlertOverlayBGColorRGB,
		setAlertOverlayTextColorRGB, setAlertOverlayTextSubColor, setAlertOverlayFocusTextColor, setAlertOverlayDisabledSelectedColor, setAlertOverlayDisabledSelectedBGColor,
		setAlertOverlayDisabledSelectedFocusColor, setAlertOverlayDisabledSelectedFocusBGColor, setAlertOverlayProgressColorRGB, setAlertOverlayProgressBGColorRGB,
		setAlertOverlayCheckboxColor, setAlertOverlayCheckboxDisabledSelectedColor, setAlertOverlayFormcheckboxitemFocusTextColor, setAlertOverlayItemDisabledFocusBGColor
	];

	// Array containing all the names for our colors
	const propNames = ['Background Color', 'Text Color RGB', 'Text Sub Color', 'Shadow Color RGB', 'Component Text Color RGB', 'Component Text Sub Color RGB', 'Component Bg Color', 'Component Active Indicator Bg Color', 'Component Inactive Indicator Bg Color', 'Focus Text Color', 'Focus Bg Color RGB',
		'Component Focus Text Color RGB', 'Component Focus Active Indicator Bg Color', 'Component Focus Inactive Indicator Bg Color', 'Selected Color RGB', 'Selected Text Color', 'Selected Bg Color', 'Disabled Focus Bg Color', 'Disabled Selected Color',
		'Disabled Selected Bg Color', 'Disabled Selected Focus Color', 'Disabled Selected Focus Bg Color', 'Fullscreen Bg Color', 'Overlay Bg Color RGB',
		'Selection Color', 'Selection Bg Color', 'Toggle Off Color', 'Toggle Off Bg Color', 'Toggle On Color', 'Toggle On Bg Color', 'Progress Color RGB',
		'Progress Buffer Color', 'Progress Bg Color RGB', 'Progress Highlighted Color', 'Progress Slider Color', 'Spinner Color RGB', 'Checkbox Color', 'Item Disabled Focus Bg Color', 'Keyguide Bg Color RGB', 'Slider Disabled Knob Bg Color',
		'Alert Overlay Bg Color RGB', 'Alert Overlay Text Color RGB', 'Alert Overlay Text Sub Color', 'Alert Overlay Focus Text Color', 'Alert Overlay Disabled Selected Color',
		'Alert Overlay Disabled Selected Bg Color', 'Alert Overlay Disabled Selected Focus Color', 'Alert Overlay Disabled Selected Focus Bg Color',
		'Alert Overlay Progress Color RGB', 'Alert Overlay Progress Bg Color RGB', 'Alert Overlay Checkbox Color', 'Alert Overlay Checkbox Disabled Selected Color',
		'Alert Overlay Formcheckboxitem Focus Text Color', 'Alert Overlay Item Disabled Focus Bg Color'
	];

	// Array containing all the css names for our colors
	const varNames = ['--sand-bg-color', '--sand-text-color-rgb', '--sand-text-sub-color', '--sand-shadow-color-rgb', '--sand-component-text-color-rgb', '--sand-component-text-sub-color-rgb', '--sand-component-bg-color',
		'--sand-component-active-indicator-bg-color', '--sand-component-inactive-indicator-bg-color', '--sand-focus-text-color', '--sand-focus-bg-color-rgb', '--sand-component-focus-text-color-rgb', '--sand-component-focus-active-indicator-bg-color',
		'--sand-component-focus-inactive-indicator-bg-color', '--sand-selected-color-rgb', '--sand-selected-text-color',
		'--sand-selected-bg-color', '--sand-disabled-focus-bg-color', '--sand-disabled-selected-color', '--sand-disabled-selected-bg-color', '--sand-disabled-selected-focus-color',
		'--sand-disabled-selected-focus-bg-color', '--sand-fullscreen-bg-color', '--sand-overlay-bg-color-rgb', '--sand-selection-color', '--sand-selection-bg-color',
		'--sand-toggle-off-color', '--sand-toggle-off-bg-color', '--sand-toggle-on-color', '--sand-toggle-on-bg-color', '--sand-progress-color-rgb', '--sand-progress-buffer-color',
		'--sand-progress-bg-color-rgb', '--sand-progress-highlighted-color', '--sand-progress-slider-color', '--sand-spinner-color-rgb', '--sand-checkbox-color', '--sand-item-disabled-focus-bg-color', '--sand-keyguide-bg-color-rgb', '--sand-slider-disabled-knob-bg-color',
		'--sand-alert-overlay-bg-color-rgb', '--sand-alert-overlay-text-color-rgb', '--sand-alert-overlay-text-sub-color', '--sand-alert-overlay-focus-text-color',
		'--sand-alert-overlay-disabled-selected-color', '--sand-alert-overlay-disabled-selected-bg-color', '--sand-alert-overlay-disabled-selected-focus-color',
		'--sand-alert-overlay-disabled-selected-focus-bg-color', '--sand-alert-overlay-progress-color-rgb', '--sand-alert-overlay-progress-bg-color-rgb',
		'--sand-alert-overlay-checkbox-color', '--sand-alert-overlay-checkbox-disabled-selected-color', '--sand-alert-overlay-formcheckboxitem-focus-text-color',
		'--sand-alert-overlay-item-disabled-focus-bg-color'
	];

	const [alert, setAlert] = useState(false);
	const [auto, setAuto] = useState(false);
	const [changes, setChanges] = useState(0);
	const [fullCSS, setFullCSS] = useState(false);
	const [openPopup, setOpenPopup] = useState(false);
	const [openWarning, setOpenWarning] = useState(false);
	const [presetActive, setActivePreset] = useState('defaultTheme');

	// Function that sets all the colors to auto
	const setColorsToAuto = (autoColors) => {
		for (let i = 0; i < autoColors.length; i++) {
			setColors[i + 2](autoColors[i]);
		}
	};

	useEffect(() => {
		if (auto && hexColors(BGColor, TextColorRGB)) {
			setColorsToAuto(generateColors(BGColor, TextColorRGB));
		}
		// eslint-disable-next-line
	}, [auto, BGColor, TextColorRGB]);

	// Function that sets the colors to those imported from a css file
	function setColorsFromImport (newColors) {
		const colorSet = getColorsFromString(newColors);
		setActivePreset('defaultTheme');

		if (colorSet !== null) {
			Promise.resolve().then(() => {
				ReactDOM.unstable_batchedUpdates(() => {
					setAuto(false);
					if (colorSet[0][0].includes('Skin Name')) {
						setSkinName(colorSet[0][1]);
						colorSet.shift();
					}
					colorSet.map((item) => {
						const index = varNames.indexOf(item[0]);
						if (index !== -1) {
							if (item[0].includes('rgb')) {
								const [r, g, b] = item[1].split(', ');
								setColors[index](convertRGBToHex([parseInt(r), parseInt(g), parseInt(b)]));
							} else {
								setColors[index](item[1]);
							}
						}
					});
				});
			});
		} else {
			setAlert(true);
		}
	}

	// Function that sets the colors to those of a preset
	function setColorsFromPreset (presetColors) {
		const colorSet = presets[`${presetColors}`];
		setActivePreset(presetColors);

		for (let color in colorSet) {
			const index = varNames.indexOf(color);
			setColors[index](colorSet[color]);
		}
	}

	// Function that sets a color to that received from an input
	function onChangeInput (props) {
		const event = props?.event;
		const index = props?.index;
		const name = props?.name;
		let value = event?.value;

		if (name === 'Skin Name') {
			setSkinName(value);
		} else {
			setColors[index](value.toUpperCase());
			if (!auto) {
				setChanges(1);
			}
		}
	}

	// Function that handles the switch to auto behavior
	function onChangeSwitch () {
		if (auto) {
			setAuto(!auto);
		} else if (changes !== 0) {
			setOpenWarning(true);
		} else {
			setAuto(!auto);
		}
	}

	// Removes some css styles included by the handleOpen and handleFocus handlers.
	function handleOnBlur () {
		if (typeof document !== 'undefined') {
			document.querySelector('#temporaryStylesheet')?.remove();
		}
	}

	// Appends some styles via javascript. The styles must be appended for the
	// non live demo components to have the basic sandstone appearance.
	function handleOnFocus () {
		if (typeof document !== 'undefined') {
			const sheet = document.createElement('style');
			sheet.id = 'temporaryStylesheet';
			sheet.innerHTML = `.sandstone-theme {
				--sand-component-focus-text-color-rgb: 76, 80, 89;
				--sand-focus-bg-color-rgb: 230, 230, 230;
				--sand-shadow-color-rgb: none;
			}`;
			document.body?.appendChild(sheet);
		}
	}

	const handleFullCSS = useCallback(() => {
		setFullCSS((val) => !val);
	}, []);

	function handleOpenPopup () {
		setOpenPopup(!openPopup);
	}

	function turnAlertOff () {
		setAlert(false);
	}

	// Function that sets the colors to those default to the selected preset
	function setDefaultState () {
		setAuto(false);
		setColorsFromPreset(presetActive);
	}

	function handleScrollTop () {
		return scrollTo({position: {x: 0, y: 0}});
	}

	// Appends some styles via javascript. The styles must be appended for the
	// live demo components to have the skin appearance.
	if (typeof document !== 'undefined') {
		const sheet = document.createElement('style');
		sheet.id = 'custom-skin';
		sheet.innerHTML = generateCSS(colors, skinName, varNames);
		document.getElementById('custom-skin')?.remove();
		document.body?.appendChild(sheet);
	}

	let screenWidth = typeof window !== 'undefined' ? window.screen.width : 0;
	let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
	let previewDropdownWidth = () => {
		if (screenWidth <= 1920) {
			if (windowWidth < 1080) {
				return 'tiny';
			} else {
				return 'medium';
			}
		} else if ( screenWidth > 1920) {
			if (windowWidth < 2160) {
				return 'tiny';
			} else {
				return 'medium';
			}
		}
	};

	return (
		<Layout className={css.mainPanel}>
			<Cell className={css.customizeSection}>
				<Scroller
					className={styles.scrollerColors}
					cbScrollTo={(fn) => {scrollTo = fn}} //eslint-disable-line
					focusableScrollbar
					horizontalScrollbar="hidden"
				>
					<Heading className={css.appTitle} size="large">Custom skin generator</Heading>
					<AutoPopup
						auto={auto}
						openWarning={openWarning}
						setAuto={setAuto}
						setChanges={setChanges}
						setOpenWarning={setOpenWarning}
					/>
					<Alert className={styles.customAlert} open={alert} type="overlay">
						<BodyText className={styles.customAlertMsg} centered size="small">Wrong type of file imported!</BodyText>
						<Button onClick={turnAlertOff} size="small">Close</Button>
					</Alert>
					<Column>
						<Row>
							<Cell>
								<Row className={css.generateStyleContainer}>
									<ImportSkin setColorsImport={setColorsFromImport} setColorsPreset={setColorsFromPreset} />
									<span>
										<BodyText className={css.switchLabel}>Generate colors automatically</BodyText>
										<Switch className={css.switchControl} onClick={onChangeSwitch} selected={auto} />
									</span>
								</Row>
								<ColorFields
									auto={auto}
									colors={colors}
									name={skinName}
									onChangeInput={onChangeInput}
									propNames={propNames}
								/>
							</Cell>
						</Row>
						<Row>
							<OutputField
								colors={colors}
								fullCSS={fullCSS}
								handleFullCSS={handleFullCSS}
								handleScrollTop={handleScrollTop}
								presetColors={presets.defaultTheme}
								setDefaultState={setDefaultState}
								skinName={skinName}
								varNames={varNames}
							/>
							<Cell className={css.topButtonContainer}>
								<TooltipButton className={css.topButton} css={css} icon="arrowlargeup" iconOnly minWidth={false} onBlur={handleOnBlur} onClick={handleScrollTop} onFocus={handleOnFocus} size="small" tooltipText="Scroll back to top of page" />
							</Cell>
						</Row>
					</Column>
				</Scroller>
			</Cell>
			<Cell size="30%" className={css.previewSection}>
				<Column className={css.previewComponents}>
					<Heading className={css.previewTitle}>Live DEMO</Heading>
					<div>
						<Row className={css.previewButtons}>
							<Button css={css} size="small">Click</Button>
							<Button css={css} disabled size="small">Disabled</Button>
						</Row>
						<Row className={css.previewButtons}>
							<Button css={css} selected size="small">Selected</Button>
							<Button css={css} disabled selected size="small">Disabled</Button>
						</Row>
					</div>
					<CheckboxItem className={css.previewCheckboxItem} label="Here be label!">Checkbox</CheckboxItem>
					<SwitchItem className={css.previewSwitchItem} css={css}>Toggle</SwitchItem>
					<Slider className={css.previewSlider} style={{'--sand-progress-bg-color-rgb': convertHexToRGB(ProgressBGColorRGB)}} />
					<RangePicker className={css.previewRangePicker} defaultValue={0} max={13} min={0} />
					<Dropdown className={css.previewDropdown} width={previewDropdownWidth()}>
						{['Item 1', 'Item 2', 'Item 3']}
					</Dropdown>
					<Button className={css.previewPopup} onClick={handleOpenPopup} size="small">
						Popup
					</Button>
					<Popup css={css} open={openPopup} position="right">
						<BodyText centered>Hello</BodyText>
						<Button onClick={handleOpenPopup} size="small">Bye</Button>
					</Popup>
				</Column>
			</Cell>
		</Layout>
	);
};

export default MainPanel;

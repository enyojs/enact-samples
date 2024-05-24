/* eslint-disable react/jsx-no-bind */

import Button from '@enact/sandstone/Button';
import Popup from '@enact/sandstone/Popup';
import Slider from '@enact/sandstone/Slider';
import {Cell, Column, Row} from '@enact/ui/Layout';
import {useState} from 'react';

import {convertHexToRGB, convertRGBToHex, hexColors} from '../../utils';

import * as commonCss from '../../common/styles.module.less';
import * as componentCss from './ColorPicker.module.less';

/**
 * A component that replaces the html color picker
 * This component was created so that we could use the color picker for webOS applications.
 */
const ColorPicker = (props) => {
	const {color, disabled, onChange} = props || null;
	const [open, setOpen] = useState(false);

	const [red, setRed] = useState('');
	const [green, setGreen] = useState('');
	const [blue, setBlue] = useState('');

	function closePopup () {
		setOpen(false);
	}

	function changeRed (ev) {
		setRed(ev.value);
	}

	function changeBlue (ev) {
		setBlue(ev.value);
	}

	function changeGreen (ev) {
		setGreen(ev.value);
	}

	function applyChanges () {
		onChange({target: {value: convertRGBToHex([red, green, blue])}});
	}

	function openPopup () {
		const [r, g, b] = hexColors(color, '#ffffff') ? convertHexToRGB(color) : convertHexToRGB('#ffffff');

		setRed(r);
		setGreen(g);
		setBlue(b);
		setOpen(true);
	}

	return (
		<div>
			<Button
				className={commonCss.colorBlock}
				disabled={disabled}
				onClick={openPopup}
				style={{
					backgroundColor: color,
					'--sand-focus-bg-color': color
				}}
				type="color"
			/>
			<Popup
				className={componentCss.colorPickerPanel}
				disabled={disabled}
				onClose={closePopup}
				open={open}
				position="top"
				scrimType="transparent"
			>
				<Column>
					<Cell align="end" component="header">
						<Button icon="closex" className={componentCss.closeButton} onClick={closePopup} size="small" />
					</Cell>
				</Column>
				<Row align="center">
					<Cell aria-label="Red" role="region">
						<div className={componentCss.sliderRegion}>
							<label>Red</label>
							<label>{red}</label>
						</div>
						<Slider defaultValue={red} min={0} max={255} onChange={changeRed} />
					</Cell>
				</Row>
				<Row align="center">
					<Cell aria-label="Green" role="region">
						<div className={componentCss.sliderRegion}>
							<label>Green</label>
							<label>{green}</label>
						</div>
						<Slider defaultValue={green} min={0} max={255} onChange={changeGreen} />
					</Cell>
				</Row>
				<Row align="center">
					<Cell aria-label="Blue" role="region">
						<div className={componentCss.sliderRegion}>
							<label>Blue</label>
							<label>{blue}</label>
						</div>
						<Slider defaultValue={blue} min={0} max={255} onChange={changeBlue} />
					</Cell>
				</Row>
				<Column align="center">
					<div className={componentCss.coloredButton} style={{backgroundColor: `rgb(${red} ,${green}, ${blue})`}} />
					<Button className={componentCss.applyButton} size="small" onClick={applyChanges}>
						Apply
					</Button>
				</Column>
			</Popup>
		</div>
	);
};

export default ColorPicker;

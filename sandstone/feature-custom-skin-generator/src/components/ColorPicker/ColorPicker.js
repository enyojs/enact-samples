/* eslint-disable react/jsx-no-bind */

import Button from '@enact/sandstone/Button';
import ColorPickerPOC from '@enact/sandstone/ColorPickerPOC';
import {memo, useState} from 'react';

import commonCss from '../../common/styles.module.less';

/**
 * A component that replaces the html color picker
 * This component was created so that we could use the color picker for webOS applications.
 */
const ColorPicker = memo((props) => {
	const {color, disabled, onChange} = props || null;
	const [open, setOpen] = useState(false);

	const closePopup = () => {
		setOpen(false);
	};

	const handleChangeColor = (ev) => {
		if (open) {
			onChange({target: {value: ev.selectedColor}});
		}
	};

	const openPopup = () => {
		setOpen(true);
	};

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
			<ColorPickerPOC
				color={color}
				colors={[color]}
				onChangeColor={handleChangeColor}
				onClose={closePopup}
				open={open}
			/>
		</div>
	);
});

export default ColorPicker;

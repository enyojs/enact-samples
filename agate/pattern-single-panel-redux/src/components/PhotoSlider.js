import Slider from '@enact/agate/Slider';
import kind from '@enact/core/kind';
import ri from '@enact/ui/resolution';
import PropTypes from 'prop-types';

import * as css from './componentStyles.module.less';

const PhotoSlider = kind({
	name: 'PhotoSlider',

	propTypes: {
		changePhotoPosition: PropTypes.func.isRequired,
		photoPosition: PropTypes.number.isRequired
	},

	styles: {
		css,
		className: 'slider'
	},

	handlers: {
		onChange: (ev, {changePhotoPosition}) => {
			changePhotoPosition(ev.value);
		}
	},

	render: ({onChange, photoPosition, ...rest}) => {
		delete rest.changePhotoPosition;

		return (
			<Slider
				{...rest}
				max={0}
				min={-100}
				onChange={onChange}
				style={{minWidth: ri.scale(360)}}
				value={photoPosition}
			/>
		);
	}
});

export default PhotoSlider;

import kind from '@enact/core/kind';
import Slider from '@enact/sandstone/Slider';
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
			<Slider {...rest} max={0} min={-100} onChange={onChange} value={photoPosition} />
		);
	}
});

export default PhotoSlider;

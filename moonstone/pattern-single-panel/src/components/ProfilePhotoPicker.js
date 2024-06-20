import BodyText from '@enact/moonstone/BodyText';
import Image from '@enact/moonstone/Image';
import Picker from '@enact/moonstone/Picker';
import Slider from '@enact/moonstone/Slider';
import {Cell, Column} from '@enact/ui/Layout';
import PropTypes from 'prop-types';
import {useCallback, useState} from 'react';

import car from '../../assets/images/car.jpeg';
import city from '../../assets/images/city.jpeg';
import mural from '../../assets/images/mural.jpeg';
import spaceShuttle from '../../assets/images/space-shuttle.jpg';
import violin from '../../assets/images/violin.jpeg';

import * as css from './ProfilePhotoPicker.module.less';

const imageURLs = [
	car,
	city,
	mural,
	spaceShuttle,
	violin
];

const imageNames = ['Vintage Car', 'City', 'Mural', 'Space Shuttle', 'Violin'];

const convertedImageUrl = (url) => {
	return url.split(/(?=assets)/g).at(-1);
};

const imageComponents = imageURLs.map(url => {
	return (<Image src={convertedImageUrl(url)} key={convertedImageUrl(url)} />);
});

const ProfilePhotoPicker = (props) => {
	const [photoPosition, setPhotoPosition] = useState(-100);
	const [photoIndex, setPhotoIndex] = useState(0);

	const handlePickerChange = useCallback((ev) => {
		setPhotoIndex(ev.value);
	}, []);

	const handleSliderChange = useCallback((ev) => {
		if (ev.value) {
			setPhotoPosition(ev.value);
		}
	}, []);

	return (
		<Column
			{...props}
			align="center center"
		>
			<Cell
				className={css.profilePhoto}
				component={Image}
				shrink
				src={convertedImageUrl(imageURLs[photoIndex])}
				style={{backgroundPosition: photoPosition + 'px'}}
			/>
			<Cell
				className={css.slider}
				component={Slider}
				max={0}
				min={-100}
				onChange={handleSliderChange}
				shrink
				value={photoPosition}
			/>
			<Cell
				centered
				component={BodyText}
				shrink
			>
				{imageNames[photoIndex]} :: {photoIndex + 1} of {imageURLs.length} photos
			</Cell>
			<Cell
				component={Picker}
				onChange={handlePickerChange}
				shrink
				width="large"
			>
				{imageComponents}
			</Cell>
		</Column>
	);
};

ProfilePhotoPicker.propTypes = {
	className: PropTypes.string
};

export default ProfilePhotoPicker;
export {imageURLs};

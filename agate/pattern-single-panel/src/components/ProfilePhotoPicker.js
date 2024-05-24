import BodyText from '@enact/agate/BodyText';
import Image from '@enact/agate/Image';
import Picker from '@enact/agate/Picker';
import Slider from '@enact/agate/Slider';
import {Cell, Column} from '@enact/ui/Layout';
import ri from '@enact/ui/resolution';
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
	const [photoIndex, setPhotoIndex] = useState(0);
	const [photoPosition, setPhotoPosition] = useState(-100);
	const handlePickerChange = useCallback((ev) => setPhotoIndex(ev.value), []);
	const handleSliderChange = useCallback((ev) => setPhotoPosition(ev.value), []);

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
				component={Slider}
				max={0}
				min={-100}
				onChange={handleSliderChange}
				shrink
				style={{minWidth: ri.scale(360)}}
				value={photoPosition}
			/>
			<Cell
				centered
				component={BodyText}
				shrink
				style={{margin: 0}}
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

export default ProfilePhotoPicker;
export {ProfilePhotoPicker, imageURLs};

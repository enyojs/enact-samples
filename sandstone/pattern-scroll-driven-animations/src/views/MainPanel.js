import BodyText from '@enact/sandstone/BodyText';
import Dropdown from '@enact/sandstone/Dropdown';
import Icon from '@enact/sandstone/Icon';
import ImageItem from '@enact/sandstone/ImageItem';
import {InputField} from '@enact/sandstone/Input';
import {Panel} from '@enact/sandstone/Panels';
import {Scroller} from '@enact/sandstone/Scroller';
import VirtualList from '@enact/sandstone/VirtualList';
import {useCallback, useMemo, useState} from 'react';
import img1 from '../img/kittens.webp';

import css from './MainPanel.module.less';

const MainPanel = ({props}) => {
	const [componentIndex, setComponentIndex] = useState(0);
	const [numberOfElements, setNumberOfElements] = useState(10);
	const [selectedAnimation, setSelectedAnimation] = useState({image: 'revealImage', text: 'swipeLeftText'});
	const [selectedAnimationIndex, setSelectedAnimationIndex] = useState({image: 0, text: 0});

	const animationsImage = useMemo(() => ['Reveal', 'Zoom', 'ZoomInOut'], []);
	const animationsText = useMemo(() => ['SwipeLeft', 'SwipeRight', 'CrossSwipe', 'Fade'], []);
	const elements = useMemo(() => [
		<BodyText className={css[selectedAnimation.text]}>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			At autem consequatur deserunt doloremque eum eveniet iusto,
			magnam magni modi nisi nulla pariatur possimus provident quibusdam repellat repellendus sequi
			vel voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			At autem consequatur deserunt doloremque eum eveniet iusto,
			magnam magni modi nisi nulla pariatur possimus provident quibusdam repellat repellendus sequi
			vel voluptates?
		</BodyText>,
		<ImageItem className={css[selectedAnimation.image]} title="kittens" src={img1} />
	], [selectedAnimation.image, selectedAnimation.text]);

	const handleOnChange = useCallback((ev) => {
		setNumberOfElements(Number(ev.value));
	}, []);

	const onClickNext = useCallback(() => {
		setComponentIndex(1);
	}, []);

	const onClickPrevious = useCallback(() => {
		setComponentIndex(0);
	}, []);

	const onSelectImageAnimation = useCallback((ev) => {
		const animation = animationsImage[ev.selected].charAt(0).toLowerCase() + animationsImage[ev.selected].slice(1);
		setSelectedAnimation(prevState => ({image: animation + 'Image', text: prevState.text}));
		setSelectedAnimationIndex(prevState => ({image: ev.selected, text: prevState.text}));
	}, [animationsImage]);

	const onSelectTextAnimation = useCallback((ev) => {
		const animation = animationsText[ev.selected].charAt(0).toLowerCase() + animationsText[ev.selected].slice(1);
		setSelectedAnimation(prevState => ({image: prevState.image, text: animation + 'Text'}));
		setSelectedAnimationIndex(prevState => ({image: prevState.image, text: ev.selected}));
	}, [animationsText]);

	const generateElements = useCallback(() => {
		const randomElements = [];
		for (let i = 0; i < numberOfElements; i++) {
			randomElements.push(elements[i % 2]);
		}

		return randomElements;
	}, [elements, numberOfElements]);

	const renderItem = useCallback((data) => {
		return (
			<div className={css.scrollAnimation}>
					Text: {data.index}
			</div>
		);
	}, []);

	return (
		<Panel {...props}>
			{componentIndex === 0 &&
				<div className={css.animations}>
					<div>
						<BodyText size="small" className={css.animationPicker}>
							Text animation: <Dropdown
							size="small" selected={selectedAnimationIndex.text}
							onSelect={onSelectTextAnimation}
						>{animationsText}</Dropdown>
						</BodyText>
						<BodyText size="small" className={css.animationPicker}>
							Image animation: <Dropdown
							size="small" selected={selectedAnimationIndex.image}
							onSelect={onSelectImageAnimation}
						>{animationsImage}</Dropdown>
						</BodyText>
						{componentIndex === 0 &&
							<Icon size="small" onClick={onClickNext} title="Next Component">{'arrowlargeright'}</Icon>}
					</div>
				</div>
			}
			{componentIndex === 1 && <Icon
				size="small" onClick={onClickPrevious}
				title="Previous Component"
			>{'arrowlargeleft'}</Icon>}
			<div>
				<BodyText size="small" className={css.animationPicker}>
					Elements:
					<InputField size="small" value={numberOfElements} onChange={handleOnChange}/>
				</BodyText>
			</div>
			<div style={{border: '1px solid gray', borderRadius: '10px', height: '70%'}}>
				{componentIndex === 0 ?
					<Scroller className={css.scroller}>
						<BodyText style={{marginBottom: 1000, marginTop: 20}}>Scroll animations</BodyText>
						{generateElements()}
					</Scroller> :
					<VirtualList itemSize={100} dataSize={numberOfElements} itemRenderer={renderItem}/>
				}
			</div>
		</Panel>
	);
};

export default MainPanel;

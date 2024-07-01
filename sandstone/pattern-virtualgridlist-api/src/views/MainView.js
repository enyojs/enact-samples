import PropTypes from 'prop-types';
import {useCallback, useEffect, useRef} from 'react';

import GalleryPanelHeader from '../components/GalleryPanelHeader';
import ImageList from '../components/ImageList';
import SideBar from '../components/SideBar';

import AppStateDecorator from './AppStateDecorator';

import css from './MainView.module.less';

const albums = ['Family', 'Car', 'Travel'];

const MainView = ({onChangeAlbum}) => {
	const scrollToRef = useRef(null);

	useEffect(() => {
		scrollToRef.current({index: 0, animate: false, focus: true});
	});

	useEffect(() => {
		// Below is an example of using scrollTo method for setting an "initial" position of VirtualList.
		// It is a substitute for focusOnIndex, setInitialFocusIndex, and scrollToItem of enyo.
		//scrollToRef.current({index: 60, animate: false, focus: true});
	}, []);

	const onChange = useCallback(({album}) => {
		onChangeAlbum(album);
	}, [onChangeAlbum]);

	const getScrollTo = useCallback((scrollTo) => {
		scrollToRef.current = scrollTo;
	}, []);

	return (
		<div className={css.mainView}>
			<GalleryPanelHeader title="My Gallery" />
			<div className={css.content}>
				<SideBar
					albums={albums}
					className={css.sideBar}
					defaultSelected={0}
					onAlbumChange={onChange}
				/>
				<ImageList
					cbScrollTo={getScrollTo}
					className={css.list}
				/>
			</div>
		</div>
	);
};

MainView.propTypes = {
	album: PropTypes.string,
	onChangeAlbum: PropTypes.func
};

export default AppStateDecorator(MainView);

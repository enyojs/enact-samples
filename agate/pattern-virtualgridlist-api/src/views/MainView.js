import {useCallback, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';

import GalleryPanelHeader from '../components/GalleryPanelHeader';
import ImageList from '../components/ImageList';
import SideBar from '../components/SideBar';
import {changeAlbum} from '../store';

import * as css from './MainView.module.less';

const albums = ['Family', 'Car', 'Travel'];

const MainView = () => {
	const scrollToRef = useRef(null);

	const dispatch = useDispatch();
	const onChangeAlbum = useCallback((album) => dispatch(changeAlbum(album)), [dispatch]);

	useEffect(() => {
		scrollToRef.current({index: 0, animate: false, focus: true});
	});

	useEffect(() => {
		// Below is an example of using scrollTo method for setting an "initial" position of VirtualList.
		// It is a substitute for focusOnIndex, setInitialFocusIndex, and scrollToItem of enyo.
		scrollToRef.current({index: 60, animate: false, focus: true});
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

export default MainView;

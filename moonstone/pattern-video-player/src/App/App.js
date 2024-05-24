import IconButton from '@enact/moonstone/IconButton';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import {AlwaysViewingPanels} from '@enact/moonstone/Panels';
import VideoPlayer, {MediaControls} from '@enact/moonstone/VideoPlayer';
import Spotlight from '@enact/spotlight';
import PropTypes from 'prop-types';
import {useCallback, useEffect, useRef, useState} from 'react';

import ItemPanel from '../views/ItemPanel';
import MainPanel from '../views/MainPanel';

import videos from './videos.js';

import * as css from './App.module.less';

const getVideo = (index) => videos[index];

const AppBase = ({className, panelId, videoId, ...rest}) => {
	const [panelIndex, setPanelIndex] = useState(panelId);
	const [panelsVisible, setPanelsVisible] = useState(false);
	const [videoIndex, setVideoIndex] = useState(videoId);
	const videoRef = useRef(null);

	useEffect(() => {
		if (panelsVisible) {
			Spotlight.focus('main-panel');
		}
	}, [panelsVisible]);

	const handleNextPanelClick = useCallback(() => setPanelIndex(prevPanelIndex => (prevPanelIndex + 1)), []);
	const handleSelectBreadcrumb = useCallback(({index}) => setPanelIndex(index), []);
	const handleHidePanelsClick = useCallback(() => setPanelsVisible(false), []);
	const handleShowPanelsClick = useCallback(() => {
		videoRef.current.hideControls();
		setPanelsVisible(true);
	}, []);
	const handleVideoIndexChange = useCallback((index) => setVideoIndex(index), []);

	const {source, desc, ...restVideo} = getVideo(videoIndex);

	return (
		<div {...rest} className={className + ' ' + css.app}>
			<VideoPlayer {...restVideo} className={css.player + ' enact-fit'} ref={videoRef} spotlightDisabled={panelsVisible}>
				<source src={source} type="video/mp4" />
				<infoComponents>
					{desc}
				</infoComponents>
				<MediaControls>
					<rightComponents>
						<IconButton
							backgroundOpacity="translucent"
							onClick={handleShowPanelsClick}
							spotlightDisabled={panelsVisible}
						>
							list
						</IconButton>
					</rightComponents>
				</MediaControls>
			</VideoPlayer>
			{panelsVisible ?
				<AlwaysViewingPanels
					index={panelIndex}
					onSelectBreadcrumb={handleSelectBreadcrumb}
				>
					<MainPanel
						onHidePanels={handleHidePanelsClick}
						onNextPanel={handleNextPanelClick}
						onVideoIndexChange={handleVideoIndexChange}
						spotlightId="main-panel"
						title="Videos"
						videoIndex={videoIndex}
					/>
					<ItemPanel title="Second" />
				</AlwaysViewingPanels> :
				null}
		</div>
	);
};

AppBase.propTypes = {
	/**
	 * Assign an alternate panel index to start on.
	 *
	 * @type {Number}
	 * @default 0
	 * @public
	 */
	panelId: PropTypes.number,

	/**
	 * Assign an alternate initial video to load first.
	 *
	 * @type {Number}
	 * @default 0
	 * @public
	 */
	videoId: PropTypes.number
};

AppBase.defaultProps = {
	panelId: 0,
	videoId: 0
};

const App = MoonstoneDecorator(AppBase);

export default App;
export {App, AppBase};

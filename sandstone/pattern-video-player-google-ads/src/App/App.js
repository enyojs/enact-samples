import {MediaControls} from '@enact/sandstone/MediaPlayer';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import VideoPlayer from '@enact/sandstone/VideoPlayer';
import {useCallback, useEffect, useRef, useState} from 'react';

import videos from './videos.js';

import css from './App.module.less';

const getVideo = (index) => videos[index];

const AppBase = ({className, ...rest}) => {
	const [adsLoaded, setAdsLoaded] = useState(false);
	const [adDisplayContainer, setAdDisplayContainer] = useState(null);
	const [adsManager, setAdsManager] = useState(null);
	const [playButtonDisabled, setPlayButtonDisabled] = useState(true);
	const adsRef = useRef(null);
	const videoRef = useRef(null);

	const initializeIMA = useCallback(() => {
		if (window.google) {
			const videoElement = videoRef.current.getVideoNode().media;
			const onAdError = () => {
				if (adsManager) {
					adsManager.destroy();
				}
			};
			const onAdLoaded = (e) => {
				const ad = e.getAd();
				if (!ad.isLinear()) {
					videoElement.play();
				}
			};
			const onContentPauseRequested = () => {
				videoElement.style.opacity = 0;
				videoElement.pause();
				setPlayButtonDisabled(true);
			};
			const onContentResumeRequested = () => {
				videoElement.style.opacity = 1;
				videoElement.play();
				setPlayButtonDisabled(false);
			};
			const onAdsManagerLoaded = (e) => {
				const _adsManager = e.getAdsManager(videoElement);
				_adsManager.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,
					onAdError);
				_adsManager.addEventListener(window.google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested);
				_adsManager.addEventListener(window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested);
				_adsManager.addEventListener(window.google.ima.AdEvent.Type.LOADED, onAdLoaded);
				setAdsManager(_adsManager);
				setPlayButtonDisabled(false);
			};

			const _adDisplayContainer = new window.google.ima.AdDisplayContainer(adsRef.current, videoElement);
			const adsLoader = new window.google.ima.AdsLoader(_adDisplayContainer);
			const adsRequest = new window.google.ima.AdsRequest();

			adsLoader.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, false);
			adsLoader.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);
			videoElement.addEventListener('ended', () => {
				adsLoader.contentComplete();
			});

			adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?' +
				'iu=/21775744923/external/single_ad_samples&sz=640x480&' +
				'cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&' +
				'gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';

			adsRequest.linearAdSlotWidth = videoElement.clientWidth;
			adsRequest.linearAdSlotHeight = videoElement.clientHeight;
			adsRequest.nonLinearAdSlotWidth = videoElement.clientWidth / 3;
			adsRequest.nonLinearAdSlotHeight = videoElement.clientHeight / 3;

			adsLoader.requestAds(adsRequest);

			setAdDisplayContainer(_adDisplayContainer);
		}
	}, [adsRef, adsManager]);

	const onPlay = useCallback(() => {
		if (adsLoaded) {
			return;
		}
		const videoElement = videoRef.current.getVideoNode().media;
		adDisplayContainer.initialize();
		const width = videoElement.clientWidth;
		const height = videoElement.clientHeight;
		try {
			adsManager.init(width, height, window.google.ima.ViewMode.NORMAL);
			adsManager.start();
		} catch (adError) {
			videoElement.play();
		}
		setAdsLoaded(true);
	}, [adDisplayContainer, adsLoaded, adsManager, videoRef]);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	useEffect(() => {
		window.onload = () => {
			initializeIMA();
		};
	}, [initializeIMA]);

	useEffect(() => {
		const videoElement = videoRef.current.getVideoNode().media;
		window.onresize = () => {
			adsManager?.resize(videoElement.clientWidth, videoElement.clientHeight, window.google.ima.ViewMode.NORMAL);
		};
	}, [adsManager, videoRef]);

	const {source, ...restVideo} = getVideo(0);

	return (
		<div {...rest} className={className + ' ' + css.app} >
			<div ref={adsRef} className={css.adContainer} />
			<VideoPlayer {...restVideo} className={css.player + ' enact-fit'} ref={videoRef} noAutoPlay onPlay={onPlay} >
				<source src={source} type="video/mp4" />
				<MediaControls playPauseButtonDisabled={playButtonDisabled} />
			</VideoPlayer>
		</div>
	);
};

const App = ThemeDecorator(AppBase);

export default App;
export {App, AppBase};

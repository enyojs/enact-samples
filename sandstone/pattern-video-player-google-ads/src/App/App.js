// App.js
// A sample Enact application that demonstrates how to integrate Google Video Ads with Sandstone VideoPlayer.
// This sample is following the IMA SDK tutorial: https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side
// The sample plays a single inline linear ad like the tutorial, so please adjust the sample if you want to play another ad type.

import {MediaControls} from '@enact/sandstone/MediaPlayer';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import VideoPlayer from '@enact/sandstone/VideoPlayer';
import {useCallback, useEffect, useRef, useState} from 'react';

import videos from './videos.js';

import css from './App.module.less';

const getVideo = (index) => videos[index];

const AppBase = ({className, ...rest}) => {
	const [adsLoaded, setAdsLoaded] = useState(false);
	const [playButtonDisabled, setPlayButtonDisabled] = useState(true);
	const adDisplayContainer = useRef(null);
	const adsManager = useRef(null);
	const adsRef = useRef(null);
	const videoRef = useRef(null);

	// Initializer for IMA SDK
	const initializeIMA = useCallback(() => {
		if (window.google) {
			const videoElement = videoRef.current.getVideoNode().media;
			const onAdError = () => {
				if (adsManager.current) {
					adsManager.current.destroy();
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
				adsManager.current = e.getAdsManager(videoElement);
				adsManager.current.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,
					onAdError);
				adsManager.current.addEventListener(window.google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested);
				adsManager.current.addEventListener(window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested);
				adsManager.current.addEventListener(window.google.ima.AdEvent.Type.LOADED, onAdLoaded);
				setPlayButtonDisabled(false);
			};

			// Initialize the ads loader and make an ads request
			adDisplayContainer.current = new window.google.ima.AdDisplayContainer(adsRef.current, videoElement);
			const adsLoader = new window.google.ima.AdsLoader(adDisplayContainer.current);
			const adsRequest = new window.google.ima.AdsRequest();

			// Add listeners for ads loader events
			adsLoader.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, false);
			adsLoader.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);

			// Let the ads loader know when the video has ended
			videoElement.addEventListener('ended', () => {
				adsLoader.contentComplete();
			});

			// Ad tag url to request
			// The sample URL is from https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/tags
			adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?' +
				'iu=/21775744923/external/single_ad_samples&sz=640x480&' +
				'cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&' +
				'gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';

			// Specify the linear and nonlinear ads slot sizes
			adsRequest.linearAdSlotWidth = videoElement.clientWidth;
			adsRequest.linearAdSlotHeight = videoElement.clientHeight;
			adsRequest.nonLinearAdSlotWidth = videoElement.clientWidth / 3;
			adsRequest.nonLinearAdSlotHeight = videoElement.clientHeight / 3;

			// Pass the request to the ads loader to request ads
			adsLoader.requestAds(adsRequest);
		}
	}, []);

	// Handler for playing video
	const onPlay = useCallback(() => {

		// Prevent loading ads if there are already ads loaded
		if (adsLoaded) {
			return;
		}

		// Initialize the ad container and load ads
		const videoElement = videoRef.current.getVideoNode().media;
		adDisplayContainer.current.initialize();
		const width = videoElement.clientWidth;
		const height = videoElement.clientHeight;
		try {
			adsManager.current.init(width, height, window.google.ima.ViewMode.NORMAL);
			adsManager.current.start();
		} catch (adError) {
			videoElement.play();
		}
		setAdsLoaded(true);
	}, [adsLoaded]);

	// Import the IMA SDK
	useEffect(() => {
		const script = document.createElement('script');
		script.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
		document.body.appendChild(script);
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	// Initialize IMA SDK when the page is finished loading
	useEffect(() => {
		window.onload = () => {
			initializeIMA();
		};
	}, [initializeIMA]);

	// Resize the ads when window is resized
	useEffect(() => {
		const videoElement = videoRef.current.getVideoNode().media;
		window.onresize = () => {
			adsManager.current?.resize(videoElement.clientWidth, videoElement.clientHeight, window.google.ima.ViewMode.NORMAL);
		};
	}, []);

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

import {forward, handle} from '@enact/core/handle';
import hoc from '@enact/core/hoc';
import VideoPlayer from "@enact/moonstone/VideoPlayer";
import PropTypes from 'prop-types';
import React from 'react';
import shaka from 'shaka-player';

const ShakaVideoPlayerDecorator = hoc((config, Wrapped) => {
	return class extends React.Component {
		static displayName = 'ShakaVideoPlayerDecorator'

		static propTypes = {
			config: PropTypes.object,
			manifestUri: PropTypes.string,
			onError: PropTypes.func
		}

		componentDidMount () {
			// Install built-in polyfills to patch browser incompatibilities.
			shaka.polyfill.installAll();

			// Check to see if the browser supports the basic APIs Shaka needs.
			if (shaka.Player.isBrowserSupported()) {
				// Everything looks good!
				this.initPlayer();
			} else {
				// This browser does not have the minimum set of APIs we need.
				console.error('Browser not supported!');
			}
		}

		onErrorEvent = (event) => {
			// Extract the shaka.util.Error object from the event.
			this.onError(event.detail);
		}

		onError = handle(
			forward('onError')
		).bindAs(this, 'onError')

		initPlayer = () => {
			// Create a Player instance with videoNode.
			const player = new shaka.Player(this.videoNode);

			// Listen for error events.
			player.addEventListener('error', this.onErrorEvent);

			// Try to load a manifest.
			// This is an asynchronous process.
			player
				.load(this.props.manifestUri)
				.then(function () {
					// This runs if the asynchronous load is successful.
					console.log('The video has now been loaded!');
				})
				.catch(this.onError); // onError is executed if the asynchronous load fails.

			// Configuration for the player here
			// https://shaka-player-demo.appspot.com/docs/api/tutorial-config.html
			const playerConfig = {...config, ...this.props.config};
			player.configure(playerConfig);
		}

		setWrappedRef = (node) => {
			if (node && node.getVideoNode) {
				// By default, moonstone/VideoPlayer uses ui/Media for its videoComponent. To get
				// the underlying <video> node, we're using the private `media` member.
				this.videoNode = node.getVideoNode().media;
			}
		}

		render () {
			const props = {...this.props};

			delete props.config;
			delete props.manifestUri;

			return <Wrapped {...props} ref={this.setWrappedRef} />
		}
	}
});

const ShakaVideoPlayer = ShakaVideoPlayerDecorator(VideoPlayer);

export default ShakaVideoPlayer;
export {
	ShakaVideoPlayer,
	ShakaVideoPlayerDecorator
};

/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */

import Button from '@enact/ui/Button';
import Item from '@enact/ui/Item';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {connect} from 'react-redux';

import {getSystemSettings, setSystemSettings, setSystemSettingsSubscribed} from '../actions';

import css from './App.module.less';

const App = (props) => {
	useEffect(() => {
		if (typeof window.PalmSystem !== 'undefined') {
			props.dispatch(getSystemSettings({
				category: 'picture',
				key: 'brightness'
			}));

			// This LS2Request is WITH subscription
			props.dispatch(getSystemSettings({
				category: 'picture',
				key: 'eyeComfortMode',
				subscribe: true
			}));
		}
	}, []);
	const handleDecreaseBrightness = () => {
		let brightnessDec = Number(props.brightness);
		brightnessDec = brightnessDec !== 0 ? brightnessDec - 10 : brightnessDec;
		return props.dispatch(setSystemSettings({
			category: 'picture',
			settings: {
				brightness: String(brightnessDec)
			}
		}));
	};
	const handleIncreaseBrightness = () => {
		let brightnessInc = Number(props.brightness);
		brightnessInc = brightnessInc !== 100 ? brightnessInc + 10 : brightnessInc;
		return props.dispatch(setSystemSettings({
			category: 'picture',
			settings: {
				brightness: String(brightnessInc)
			}
		}));
	};
	// if subscribed, we don't need to invoke redux chain as subscribed instance will invoke the data flow
	const onEyeComfortModeToggle = () => setSystemSettingsSubscribed({
		category: 'picture',
		settings: {
			'eyeComfortMode': props.eyeComfortMode === 'on' ? 'off' : 'on'
		}
	});
	const checkSystem = () => {
		if (typeof window === 'undefined' || typeof window.PalmSystem === 'undefined') {
			return <div>This test will only function correctly on webOS systems!</div>;
		}
	};
	const {brightness, eyeComfortMode} = props;
	if (typeof window.PalmSystem === 'undefined') {
		return <div className={css.main}>This test will only function correctly on webOS systems!</div>;
	}

	return (
		<div className={css.main}>
			{checkSystem()}
			<Item>
				Brightness : {brightness}
			</Item>
			<Button className={css.button} onClick={handleDecreaseBrightness}>Decrease</Button>
			<Button className={css.button} onClick={handleIncreaseBrightness}>Increase</Button>
			<Item>
				Eye Comfort Mode : {eyeComfortMode}
			</Item>
			<Button className={css.button} onClick={onEyeComfortModeToggle}>Toggle</Button>
		</div>
	);

};

App.propTypes = {
	dispatch: PropTypes.func.isRequired,
	brightness: PropTypes.string,
	eyeComfortMode: PropTypes.string
};

const mapStateToProps = ({systemSettings}) => {
	const {brightness, eyeComfortMode} = systemSettings;
	return {
		brightness,
		eyeComfortMode
	};
};

export default connect(mapStateToProps)(App);

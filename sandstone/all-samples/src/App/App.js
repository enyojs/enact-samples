import kind from '@enact/core/kind';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import PropTypes from 'prop-types';
import {HashRouter, Route, Routes, useNavigate} from 'react-router-dom';
import {StaticRouter} from 'react-router-dom/server';

import SampleItem from '../components/SampleItem';
import ButtonToSamples from '../components/ButtonToSamples';
import {AppBase as PatternDynamicPanel} from '../../../pattern-dynamic-panel/src/App/App';
import {AppBase as PatternAccountIcon} from '../../../pattern-account-icon/src/App/App';
import {AppBase as PatternVideoPlayerCustom} from '../../../pattern-video-player-custom/src/App/App';
import {AppBase as PatternLayout} from '../../../pattern-layout/src/App/App';
import {appElementBase as PatternLocaleSwitching} from '../../../pattern-locale-switching/src/main';
import {App as PatternReact18New} from '../../../pattern-react18-new/src/App';
import {appElementBase as PatternRoutablePanels} from '../../../pattern-routable-panels/src/main';
import {AppBase as PatternSinglePanel} from '../../../pattern-single-panel/src/App/App';
import {appElementBase as PatternSinglePanelRedux} from '../../../pattern-single-panel-redux/src/main';
import {AppBase as PatternVideoPlayer} from '../../../pattern-video-player/src/App/App';
import {AppBase as PatternVideoPlayerGoogleAds} from '../../../pattern-video-player-google-ads/src/App/App';
import {appElementBase as PatternVirtualgridlistApi} from '../../../pattern-virtualgridlist-api/src/main';
import {App as PatternVirtualgridlistIncrementalLoad} from '../../../pattern-virtualgridlist-incremental-load/src/App/App';
import {appElementBase as PatternVirtuallistPreservingFocus} from '../../../pattern-virtuallist-preserving-focus/src/main';
import {AppBase as TutorialHelloEnact} from '../../../tutorial-hello-enact/src/App/App';
import {AppBase as TutorialKittenBrowser} from '../../../tutorial-kitten-browser/src/App/App';

import css from './App.module.less';

const NavigationMenu = kind({
	name: 'NavigationMenu',

	functional: true,

	propTypes: {
		location: PropTypes.any,
		match: PropTypes.any,
		staticContext: PropTypes.any
	},

	render: ({...props}) => {
		delete props.match;
		delete props.location;
		delete props.staticContext;

		const navigate = useNavigate(); //eslint-disable-line

		return (
			<div {...props} style={{height: '90%'}}>
				<Scroller>
					{
						// eslint-disable-next-line no-use-before-define
						routes.map(({path}, index) => {
							if (path !== '/') {
								return (
									<SampleItem key={index} path={path} navigate={navigate}>
										{path.substring(1)}
									</SampleItem>
								);
							}
							return null;
						})
					}
				</Scroller>
			</div>
		);
	}
});

const routes = [
	{path: '/', exact: true, element: <NavigationMenu />},
	{path: '/PatternAccountIcon', element: <PatternAccountIcon />},
	{path: '/PatternDynamicPanel', element: <PatternDynamicPanel />},
	{path: '/PatternLayout', element: <PatternLayout />},
	{path: '/PatternLocaleSwitching', element: <PatternLocaleSwitching />},
	{path: '/PatternReact18New', element: <PatternReact18New />},
	{path: '/PatternRoutablePanels', element: <PatternRoutablePanels />},
	{path: '/PatternSinglePanel', element: <PatternSinglePanel />},
	{path: '/PatternSinglePanelRedux', element: <PatternSinglePanelRedux />},
	{path: '/PatternVideoPlayer', element: <PatternVideoPlayer />},
	{path: '/PatternVideoPlayerCustom', element: <PatternVideoPlayerCustom />},
	{path: '/PatternVideoPlayerGoogleAds', element: <PatternVideoPlayerGoogleAds />},
	{path: '/PatternVirtualgridlistApi', element: <PatternVirtualgridlistApi />},
	{path: '/PatternVirtualgridlistIncrementalLoad', element: <PatternVirtualgridlistIncrementalLoad />},
	{path: '/PatternVirtuallistPreservingFocus', element: <PatternVirtuallistPreservingFocus />},
	{path: '/TutorialHelloEnact', element: <TutorialHelloEnact />},
	{path: '/TutorialKittenBrowser', element: <TutorialKittenBrowser />}
];

const AppBase = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: (props) => {
		const Router = typeof window !== 'undefined' ? HashRouter : StaticRouter;
		return (
			<Router>
				<div {...props}>
					<ButtonToSamples />
					<Routes>
						{routes.map((route, index) => <Route key={index} {...route} />)}
					</Routes>
				</div>
			</Router>
		);
	}
});

const App = ThemeDecorator(AppBase);
export default App;

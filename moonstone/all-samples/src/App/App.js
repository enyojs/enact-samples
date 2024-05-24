import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import Scroller from '@enact/moonstone/Scroller';
import PropTypes from 'prop-types';
import {HashRouter, Route, Routes, useNavigate} from 'react-router-dom';
import {StaticRouter} from 'react-router-dom/server';

import SampleItem from '../components/SampleItem';
import ButtonToSamples from '../components/ButtonToSamples';
import {AppBase as PatternActivityPanels} from '../../../pattern-activity-panels/src/App/App';
import {appElementBase as PatternActivityPanelsDeepLinking} from '../../../pattern-activity-panels-deep-linking/src/main';
import {appElementBase as PatternActivityPanelsRedux} from '../../../pattern-activity-panels-redux/src/main';
import {AppBase as PatternDynamicPanel} from '../../../pattern-dynamic-panel/src/App/App';
import {AppBase as PatternExpandableList} from '../../../pattern-expandablelist-object/src/App/App';
import {AppBase as PatternLayout} from '../../../pattern-layout/src/App/App';
import {appElementBase as PatternLocaleSwitching} from '../../../pattern-locale-switching/src/main';
import {appElementBase as PatternRoutablePanels} from '../../../pattern-routable-panels/src/main';
import {AppBase as PatternSinglePanel} from '../../../pattern-single-panel/src/App/App';
import {appElementBase as PatternSinglePanelRedux} from '../../../pattern-single-panel-redux/src/main';
import {AppBase as PatternVideoPlayer} from '../../../pattern-video-player/src/App/App';
import {appElementBase as PatternVirtualgridlistApi} from '../../../pattern-virtualgridlist-api/src/main';
import {appElementBase as PatternVirtuallistPreservingFocus} from '../../../pattern-virtuallist-preserving-focus/src/main';


import * as css from './App.module.less';

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
	{path: '/PatternActivityPanels', element: <PatternActivityPanels />},
	{path: '/PatternActivityPanelsDeepLinking', element: <PatternActivityPanelsDeepLinking />},
	{path: '/PatternActivityPanelsRedux', element: <PatternActivityPanelsRedux />},
	{path: '/PatternDynamicPanel', element: <PatternDynamicPanel />},
	{path: '/PatternExpandableList', element: <PatternExpandableList />},
	{path: '/PatternLayout', element: <PatternLayout />},
	{path: '/PatternLocaleSwitching', element: <PatternLocaleSwitching />},
	{path: '/PatternRoutablePanels', element: <PatternRoutablePanels />},
	{path: '/PatternSinglePanel', element: <PatternSinglePanel />},
	{path: '/PatternSinglePanelRedux', element: <PatternSinglePanelRedux />},
	{path: '/PatternVideoPlayer', element: <PatternVideoPlayer />},
	{path: '/PatternVirtualgridlistApi', element: <PatternVirtualgridlistApi />},
	{path: '/PatternVirtuallistPreservingFocus', element: <PatternVirtuallistPreservingFocus />}
];

const App = kind({
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

export default MoonstoneDecorator(App);

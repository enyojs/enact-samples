import {adaptEvent, forward, handle} from '@enact/core/handle';
import hoc from '@enact/core/hoc';
import kind from '@enact/core/kind';
import Button from '@enact/sandstone/Button';
import {Panels} from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Spotlight from '@enact/spotlight';
import PropTypes from 'prop-types';
import compose from 'ramda/src/compose';
import {Component} from 'react';

import {importAll} from '../components/util';
import Details from '../views/Details';
import FavoritesList from '../views/FavoritesList';
import MainPanel from '../views/MainPanel';

const thumbs = importAll(require.context('../views/thumbs', false, /\.(png|jpe?g|svg)$/));

const items = [];

const itemPusher = (title, subTitle, component, image) => {
	items.push({
		title,
		subTitle,
		component,
		image
	});
};

// Add all of our Layout Patterns
itemPusher('Favorites List', 'Two list columns with focusable buttons in the center', FavoritesList, thumbs['favorites-list.jpg']);
itemPusher('Details View', 'Show off details about an item', Details, thumbs['details.jpg']);

const forceFocusElement = () => {
	if (!Spotlight.getCurrent()) {
		Spotlight.focus();
		Spotlight.initialize();
	}
};

const Placeholder = kind({name: 'Placeholder'});

const App = kind({
	name: 'LayoutApp',

	propTypes: {
		debug: PropTypes.bool,
		itemIndex: PropTypes.number,
		onChangePanel: PropTypes.func,
		onToggleDebug: PropTypes.func
	},

	computed: {
		DebugButton: ({onToggleDebug, debug}) => (<Button onClick={onToggleDebug} selected={debug} size="small">Layout Borders</Button>)
	},

	handlers: {
		onSelectBreadcrumb: handle(
			adaptEvent((ev, props) => ({index: (props.index - 1), itemIndex: null}), forward('onChangePanel')),
			forward('onSelectBreadcrumb')
		),
		onChangePanel: handle(
			adaptEvent(({index}) => ({index: 1, itemIndex: index}), forward('onChangePanel'))
		)
	},

	render: ({debug, DebugButton, itemIndex, onChangePanel, onSelectBreadcrumb, ...rest}) => {
		// In order not to lose focus on the sample when navigating to the sample through all-samples, for now we manually focus the element
		setTimeout(forceFocusElement, 100);

		delete rest.onToggleDebug;

		let secondaryPanel = <Placeholder />;
		const item = items[itemIndex];
		if (item) {
			const ItemPanel = item.component;
			secondaryPanel = (
				<ItemPanel
					className={debug ? 'debug layout' : ''}
					DebugButton={DebugButton}
					title={item.title}
					titleBelow={item.subTitle}
				/>
			);
		}
		return (
			<Panels {...rest} onBack={onSelectBreadcrumb}>
				<MainPanel items={items} onChangePanel={onChangePanel} />
				{secondaryPanel}
			</Panels>
		);
	}
});

const AppDecorator = hoc((config, Wrapped) => {
	return class extends Component {
		static displayName = 'AppDecorator';

		static propTypes = {
			defaultDebug: PropTypes.bool,
			defaultIndex: PropTypes.number,
			defaultItemIndex: PropTypes.number
		};

		static defaultProps = {
			defaultDebug: false,
			defaultIndex: 0,
			defaultItemIndex: 0
		};

		constructor (props) {
			super(props);

			this.state = {
				debug: this.props.defaultDebug,
				index: this.props.defaultIndex,
				itemIndex: this.props.defaultItemIndex
			};
		}

		handleChangePanel = (ev) => {
			forward('onChangePanel', ev, this.props);
			this.setState({index: ev.index, itemIndex: ev.itemIndex});
		};

		handleToggleDebug = () => {
			this.setState(state => {
				const newState = {debug: !state.debug};
				forward('onToggleDebug', newState, this.props);
				return newState;
			});
		};

		render () {
			const {...rest} = this.props;
			delete rest.defaultDebug;
			delete rest.defaultIndex;
			delete rest.defaultItemIndex;

			return <Wrapped
				{...rest}
				debug={this.state.debug}
				index={this.state.index}
				itemIndex={this.state.itemIndex}
				onChangePanel={this.handleChangePanel}
				onToggleDebug={this.handleToggleDebug}
			/>;
		}
	};
});

export default compose(
	ThemeDecorator,
	AppDecorator
)(App);

import {connect} from 'react-redux';
import Item from '@enact/moonstone/Item';
import React, {Component} from 'react';
import ri from '@enact/ui/resolution';
import PropTypes from 'prop-types';
import VirtualList from '@enact/moonstone/VirtualList';

import {saveLastScrollInfo} from '../actions';
import css from './PatternList.less';

const items = Array.from(new Array(1000)).map((n, i) => `Item  ${('00' + i).slice(-3)}`);

class PatternListBase extends Component {
	static propTypes = {
		id: PropTypes.string,
		onClick: PropTypes.func,
		onScrollStop: PropTypes.func,
		scrollLeft: PropTypes.number,
		scrollTop: PropTypes.number
	}

	static defaultProps = {
		scrollLeft: 0,
		scrollTop: 0
	}

	componentDidMount () {
		const {scrollLeft, scrollTop} = this.props;
		this.scrollTo({position: {x: scrollLeft, y: scrollTop}, animate: false});
	}

	renderItem = ({data, index, ...rest}) => (
		<Item {...rest} onClick={this.props.onClick}>
			{data[index]}
		</Item>
	)

	getScrollTo = (fn) => {
		this.scrollTo = fn;
	}

	render = () => {
		const {onScrollStop, id, ...rest} = this.props;
		delete rest.scrollLeft;
		delete rest.scrollTop;

		return (
			<VirtualList
				cbScrollTo={this.getScrollTo}
				className={css.list}
				component={this.renderItem}
				containerId={id}
				data={items}
				dataSize={items.length}
				itemSize={ri.scale(72)}
				onScrollStop={onScrollStop}
			/>
		);
	}

}

const mapStateToProps = ({lastScrollInfo}, {index}) => {
	const info = lastScrollInfo[index];
	return {
		scrollLeft: info ? info.scrollLeft : 0,
		scrollTop: info ? info.scrollTop : 0
	};
};

const mapDispatchToProps = (dispatch, {index}) => ({
	onScrollStop: (info) => dispatch(saveLastScrollInfo(index, info))
});

const PatternList = connect(mapStateToProps, mapDispatchToProps)(PatternListBase);

export default PatternList;
export {PatternList};

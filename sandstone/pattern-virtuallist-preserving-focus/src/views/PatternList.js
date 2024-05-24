import Item from '@enact/sandstone/Item';
import VirtualList from '@enact/sandstone/VirtualList';
import ri from '@enact/ui/resolution';
import PropTypes from 'prop-types';
import {useCallback} from 'react';

import * as css from './PatternList.module.less';

const items = Array.from(new Array(1000)).map((n, i) => `Item  ${('00' + i).slice(-3)}`);

const PatternList = ({id, onClick, ...rest}) => {
	const renderItem = useCallback(({index, ...restProps}) => (
		<Item {...restProps} onClick={onClick}>
			{items[index]}
		</Item>
	), [onClick]);

	return (
		<VirtualList
			{...rest}
			className={css.list}
			dataSize={items.length}
			id={id}
			itemRenderer={renderItem}
			itemSize={ri.scale(144)}
			spotlightId={id}
		/>
	);
};

PatternList.propTypes = {
	id: PropTypes.string,
	onClick: PropTypes.func
};

export default PatternList;
export {PatternList};

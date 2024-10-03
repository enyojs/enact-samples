import {ImageItem} from '@enact/sandstone/ImageItem';
import {Panel, Header} from '@enact/sandstone/Panels';
import ri from '@enact/ui/resolution';
import {VirtualGridList} from '@enact/sandstone/VirtualList';
import {useCallback, useState, useEffect} from 'react';

const defaultSize = 50;
const addedListSize = 30;

const MainView = (props) => {
	const [items, setItems] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	const createInitialData = useCallback((itemSize) => {
		const newItems = Array.from(items);

		for (let i = 0; i < itemSize; i++) {
			const text = `Item ${i}`,
				subText = `SubItem ${i}`,
				color = Math.floor(Math.random() * (0x1000000 - 0x101010) + 0x101010).toString(16),
				source = `https://placehold.co/300x300/` + color + '/ffffff/png?text=Image+' + i;

			newItems.push({text, subText, source});
		}
		setItems(newItems);
	}, [items]);

	const loadMoreData = useCallback(() => {
		// Inside this function, you can fetch data from your API server.
		// Here, assuming that the fetch is successful, we only proceed with attaching the data.

		const newItems = Array.from(items);
		const length = items.length;

		for (let i = length; i < length + addedListSize; i++) {
			const text = `Item ${i}`,
				subText = `SubItem ${i}`,
				color = Math.floor(Math.random() * (0x1000000 - 0x101010) + 0x101010).toString(16),
				source = `https://placehold.co/300x300/` + color + '/ffffff/png?text=Image+' + i;

			newItems.push({text, subText, source});
		}
		setItems(newItems);
	}, [items]);

	const renderItem = useCallback(({index, ...rest}) => {
		const {text, subText, source} = items[index];
		return (
			<ImageItem {...rest} label={subText} src={source}>
				{text}
			</ImageItem>
		);
	}, [items]);

	const handleScrollStop = useCallback((event) => {
		const reachedBottom = event.reachedEdgeInfo.bottom;

		if (reachedBottom) {
			setIsFetching(true);
		}
	}, []);

	useEffect(() => {
		createInitialData(defaultSize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (isFetching) {
			loadMoreData();
			setIsFetching(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFetching]);

	return (
		<Panel {...props}>
			<Header title="VirtualGridList With Incremental Data Load" />
			<VirtualGridList
				dataSize={items.length}
				itemRenderer={renderItem}
				itemSize={{minHeight: ri.scale(570), minWidth: ri.scale(688)}}
				onScrollStop={handleScrollStop}
			/>
		</Panel>
	);
};

export default MainView;

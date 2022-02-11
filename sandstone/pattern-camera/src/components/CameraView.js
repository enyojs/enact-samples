import Item from '@enact/sandstone/Item';
import {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import VirtualList from '@enact/sandstone/VirtualList';
import ri from '@enact/ui/resolution';
import Button from '@enact/sandstone/Button';
import {Column} from '@enact/ui/Layout';
import Heading from '@enact/sandstone/Heading';

import {closeCamera, getCameraIds, startCamera} from '../actions';

const CameraView = () => {
	const videoRef = useRef(null);
	const dispatch = useDispatch();
	const cameraIds = useSelector((store) => store.cameraIds);
	const cameraStatus = useSelector((store) => store.cameraStatus);

	let cameraOption;

	useEffect(() => {
		if (typeof window.PalmSystem !== 'undefined') {
			dispatch(getCameraIds({}));
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		videoRef.current.load();
	}, [cameraStatus]);

	const checkSystem = () => {
		if (typeof window === 'undefined' || typeof window.PalmSystem === 'undefined') {
			return <div>This test will only function correctly on webOS systems!</div>;
		}
	};

	if (typeof window.PalmSystem === 'undefined') {
		return <div>This test will only function correctly on webOS systems!</div>;
	}

	cameraOption = escape(JSON.stringify({
		mediaTransportType: 'CAMERA',
		option: cameraStatus
	}));

	return (
		<div>
			{checkSystem()}
			<Heading showLine>Camera List</Heading>
			<VirtualList
				dataSize={cameraIds.length}
				// eslint-disable-next-line react/jsx-no-bind
				itemRenderer={({index}) => (
					<Item
						// eslint-disable-next-line react/jsx-no-bind
						onClick={() => {
							dispatch(startCamera(cameraIds[index].id));
						}}
					>
						{cameraIds[index].id}
					</Item>
				)}
				itemSize={ri.scale(144)}
			/>
			<Column>
				<video ref={videoRef} height="480" width="720">
					<source src="camera://com.webos.service.camera2/" type={'service/webos-camera;cameraOption=' + cameraOption} />
				</video>
			</Column>
			<Column align="center">
				<Button
					size="small"
					// eslint-disable-next-line react/jsx-no-bind
					onClick={() => {
						dispatch(closeCamera(cameraStatus.handle));
					}}
				>
					Close Camera
				</Button>
			</Column>
		</div>
	);
};

export default CameraView;

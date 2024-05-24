import Image from '@enact/agate/Image';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as css from './containerStyles.module.less';

const PhotoPreview = kind({
	name: 'PhotoPreview',

	propTypes: {
		imageURLs: PropTypes.array.isRequired,
		photoIndex: PropTypes.number.isRequired,
		photoPosition: PropTypes.number.isRequired,
		dispatch: PropTypes.func
	},

	styles: {
		css,
		className: 'profilePhoto'
	},

	render: ({imageURLs, photoIndex, photoPosition, ...rest}) => {
		delete rest.dispatch;

		return (
			<Image {...rest} src={imageURLs[photoIndex]} style={{backgroundPosition: photoPosition + 'px'}} />
		);
	}
});

const mapStateToProps = (state) => {
	return ({
		photoIndex: state.photoIndex,
		photoPosition: state.photoPosition
	});
};

const PhotoPreviewContainer = connect(
	mapStateToProps
)(PhotoPreview);

export default PhotoPreviewContainer;

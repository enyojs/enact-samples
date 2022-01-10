import kind from '@enact/core/kind';
import BodyText from '@enact/sandstone/BodyText';
import {InputField} from '@enact/sandstone/Input';
import {Cell, Layout} from '@enact/ui/Layout';
import PropTypes from 'prop-types';

import ColorPicker from '../ColorPicker/ColorPicker';

import componentCss from './SingleField.module.less';
import css from '../../common/styles.module.less';

const SingleField = kind({
	name: 'SingleField',

	propTypes: {
		color: PropTypes.string,
		onChangeInput: PropTypes.func,
		propName: PropTypes.string
	},

	defaultProps: {
		color : '#FB9039'
	},

	styles:{
		css,
		className:'singleField'
	},

	handlers: {
		onChangeInputField: (event, {onChangeInput, propName}) => {
			onChangeInput({event, name: propName});
		},
		onChangeInput: (event, {onChangeInput, propName}) => {
			onChangeInput({event: event.target, name: propName});
		}
	},

	render: ({color, onChangeInput, onChangeInputField, propName, ...rest}) => {
		delete rest.onChangeInput;

		return (
			<Layout className={css.inputField}>
				<Cell size="40%">
					<BodyText className={css.labelField}>{propName}</BodyText>
				</Cell>
				<Cell className={componentCss.singleField}>
					<ColorPicker {...rest} color={color} onChange={onChangeInput} />
					<InputField {...rest} className={componentCss.singleInput} css={componentCss} onChange={onChangeInputField} value={color} />
				</Cell>
			</Layout>
		);
	}
});

export default SingleField;
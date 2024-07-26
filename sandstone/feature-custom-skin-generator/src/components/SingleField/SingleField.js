import kind from '@enact/core/kind';
import platform from '@enact/core/platform';
import BodyText from '@enact/sandstone/BodyText';
import {InputField} from '@enact/sandstone/Input';
import {Cell, Layout} from '@enact/ui/Layout';
import PropTypes from 'prop-types';

import ColorPicker from '../ColorPicker/ColorPicker';

import commonCss from '../../common/styles.module.less';
import componentCss from './SingleField.module.less';

/**
 * A component that contains a label and an input field, used to change the value of a css attribute
 */
const SingleField = kind({
	name: 'SingleField',

	propTypes: {
		/**
		 * Indicates this component's position inside a larger list of components
		 * @type {Number}
		 * @required
		 * @public
		 */
		index: PropTypes.number.isRequired,

		/**
		 * Setter function that interacts with prop `color`
		 *
		 * @type {Function}
		 * @required
		 * @public
		 */
		onChangeInput: PropTypes.func.isRequired,

		/**
		 * Holds the name displayed next to the input
		 *
		 * @type {String}
		 * @required
		 * @public
		 */
		propName: PropTypes.string.isRequired,

		/**
		 * Indicates the color displayed in the input field
		 *
		 * @type {String}
		 * @default #FB9039
		 * @public
		 */
		color: PropTypes.string,

		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal elements and states of this component.
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object
	},

	defaultProps: {
		color : '#FB9039'
	},

	styles:{
		css: componentCss,
		className:'singleField'
	},

	handlers: {
		// Handler that sends back to Main Panel the event captured by the input field and the name of the field
		// it comes from via the onChangeInput function and the index
		onChangeInputField: (event, {index, onChangeInput, propName}) => {
			onChangeInput({event, name: propName, index: index});
		},

		// Handler that sends back to Main Panel the event captured by the color picker and the name of the field
		// it comes from via the onChangeInput function and the index
		onChangeInput: (event, {index, onChangeInput, propName}) => {
			onChangeInput({event: event.target, name: propName, index: index});
		}
	},

	render: ({color, css, onChangeInput, onChangeInputField, propName, ...rest}) => {
		delete rest.index;
		delete rest.onChangeInput;

		return (
			<Layout className={commonCss.inputField}>
				<Cell size="35%">
					<BodyText className={commonCss.labelField}>{propName}</BodyText>
				</Cell>
				<Cell size="65%" className={componentCss.singleField}>
					{platform.webos ?
						<ColorPicker {...rest} color={color} onChange={onChangeInput} /> :
						<input {...rest} className={commonCss.colorBlock} onChange={onChangeInput} style={{backgroundColor: color}} type="color" value={color} />
					}
					<InputField {...rest} className={css.singleInput} css={css} onChange={onChangeInputField} value={color} />
				</Cell>
			</Layout>
		);
	}
});

export default SingleField;

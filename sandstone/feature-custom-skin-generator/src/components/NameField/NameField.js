import kind from '@enact/core/kind';
import BodyText from '@enact/sandstone/BodyText';
import {InputField} from '@enact/sandstone/Input';
import {Cell, Layout} from '@enact/ui/Layout';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import * as commonCss from '../../common/styles.module.less';
import * as componentCss from './NameField.module.less';

/**
 * A component that contains a label and an input field, used to denote the name of the skin
 */
const NameField = kind({
	name: 'NameField',

	propTypes: {
		/**
		 * Setter function that interacts with prop `name`
		 *
		 * @type {Function}
		 * @required
		 * @public
		 */
		onChangeInput: PropTypes.func.isRequired,

		/**
		 * The name displayed next to the input field
		 *
		 * @type {String}
		 * @required
		 * @public
		 */
		propName: PropTypes.string.isRequired,

		/**
		 * Customizes the component by mapping the supplied collection of CSS class names to the
		 * corresponding internal elements and states of this component.
		 *
		 * @type {Object}
		 * @public
		 */
		css: PropTypes.object,

		/**
		 * The value attributed to input
		 *
		 * @type {String}
		 * @default ''
		 * @public
		 */
		name: PropTypes.string,

		/**
		 * The value attributed to input as a placeholder
		 *
		 * @type {String}
		 * @default 'Custom Skin'
		 * @public
		 */
		placeholder: PropTypes.string
	},

	defaultProps: {
		name : '',
		placeholder : 'Custom Skin'
	},

	styles:{
		css: componentCss,
		className:'nameField'
	},

	handlers: {
		// Handler that sends back to Main Panel the event captured and the name of the field it comes from via the
		// onChangeInput function
		onChangeInputField: (event, {onChangeInput, propName}) => {
			onChangeInput({event, name: propName});
		}
	},

	render: ({css, name, onChangeInputField, placeholder, propName, ...rest}) => {
		delete rest.onChangeInput;

		return (
			<Layout className={classnames(commonCss.inputField, css.nameField)}>
				<Cell size="35%">
					<BodyText className={commonCss.labelField} css={css}>{propName}</BodyText>
				</Cell>
				<InputField
					{...rest}
					className={css.inputField}
					css={css}
					onChange={onChangeInputField}
					placeholder={placeholder}
					value={name}
				/>
			</Layout>
		);
	}
});

export default NameField;

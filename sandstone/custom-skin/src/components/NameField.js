import kind from '@enact/core/kind';
import BodyText from '@enact/sandstone/BodyText';
import {InputField} from '@enact/sandstone/Input';
import {Cell, Layout} from '@enact/ui/Layout';
import PropTypes from 'prop-types';

import css from './styles.module.less';
import componentCss from './NameField.module.less';

const NameField = kind({
	name: 'NameField',

	propTypes: {
		name: PropTypes.string,
		onChangeInput: PropTypes.func,
		placeholder: PropTypes.func,
		propName: PropTypes.string
	},

	defaultProps: {
		name : '',
		placeholder : 'Custom Skin'
	},

	styles:{
		css,
		className:'nameField'
	},

	handlers: {
		onChangeInputField: (event, {onChangeInput, propName}) => {
			onChangeInput({event, name: propName});
		}
	},

	render: ({name, onChangeInputField, placeholder, propName, ...rest}) => {
		return (
			<Layout className={css.inputField}>
				<Cell size="40%">
					<BodyText skin="neutral" className={css.labelField}>{propName}</BodyText>
				</Cell>
				<Cell>
					<InputField
						skin="neutral"
						{...rest}
						className={componentCss.nameField}
						onChange={onChangeInputField}
						placeholder={placeholder}
						value={name}
					/>
				</Cell>
			</Layout>
		);
	}
});

export default NameField;

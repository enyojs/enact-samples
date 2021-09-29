import kind from '@enact/core/kind';
import BodyText from '@enact/sandstone/BodyText';
import {InputField} from '@enact/sandstone/Input';
import {Cell, Layout} from '@enact/ui/Layout';
import PropTypes from 'prop-types';

import componentCss from './TripleField.module.less';
import css from './styles.module.less';

const TripleField = kind({
	name: 'TripleField',

	propTypes: {
		blue: PropTypes.string,
		green: PropTypes.string,
		onChangeInput: PropTypes.func,
		propName: PropTypes.string,
		red: PropTypes.string
	},

	defaultProps: {
		blue : '0',
		green : '0',
		red : '255'
	},

	styles:{
		css,
		className:'tripleField'
	},

	computed:{
		getColor:({red, green, blue}) => {
			return `rgb(${red}, ${green}, ${blue})`;
		}
	},

	handlers: {
		onChangeInputB: (event, {onChangeInput, propName}) => {
			onChangeInput({event, name: propName, color: 'blue'});
		},
		onChangeInputG: (event, {onChangeInput, propName}) => {
			onChangeInput({event, name: propName, color: 'green'});
		},
		onChangeInputR: (event, {onChangeInput, propName}) => {
			onChangeInput({event, name: propName, color: 'red'});
		}
	},

	render: ({blue, getColor, green, onChangeInputB, onChangeInputG, onChangeInputR, propName, red, ...rest}) => {
		return (
			<Layout className={css.inputField}>
				<Cell size="40%">
					<BodyText className={css.labelField}>{propName}</BodyText>
				</Cell>
				<Cell className={componentCss.tripleField}>
					<input className={css.colorBlock} style={{backgroundColor: getColor}} type="color" value={getColor} />
					<span>R:</span>
					<InputField {...rest} className={componentCss.tripleInput} value={red} onChange={onChangeInputR} />
					<span>G:</span>
					<InputField {...rest} className={componentCss.tripleInput} value={green} onChange={onChangeInputG} />
					<span>B:</span>
					<InputField {...rest} className={componentCss.tripleInput} value={blue} onChange={onChangeInputB} />
				</Cell>
			</Layout>
		);
	}
});

export default TripleField;

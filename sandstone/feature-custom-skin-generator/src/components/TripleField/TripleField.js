import kind from '@enact/core/kind';
import platform from '@enact/core/platform';
import BodyText from '@enact/sandstone/BodyText';
import {InputField} from '@enact/sandstone/Input';
import {Cell, Layout} from '@enact/ui/Layout';
import PropTypes from 'prop-types';

import ColorPicker from '../ColorPicker/ColorPicker';

import {convertHexToRGB, convertRGBToHex} from '../../utils';

import commonCss from '../../common/styles.module.less';
import componentCss from './TripleField.module.less';

/**
 * A component that contains a label and three input fields, used to change the value of a css attribute
 */
const TripleField = kind({
	name: 'TripleField',

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
		 * Indicates the color displayed in the input fields (converted from hex to RGB)
		 *
		 * @type {String}
		 * @default #FFFFFF
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
		color: '#FFFFFF'
	},

	styles:{
		css: componentCss,
		className:'tripleField'
	},

	handlers: {
		// Handler that sends back to Main Panel the event captured by the color picker and the name of the field
		// it comes from via the onChangeInput function and the index
		onChangeInput: (event, {index, onChangeInput, propName}) => {
			onChangeInput({event: event.target, name: propName, index: index});
		},
		// Handler that sends back to Main Panel the new color value and the name of the field
		// it comes from via the onChangeInput function and the index
		onChangeInputB: (event, {color, index, onChangeInput, propName}) => {
			const colors = convertHexToRGB(color);
			const newColor = event.value ? parseInt(event.value) : 0;
			onChangeInput({event: {value: convertRGBToHex([colors[0], colors[1], newColor])}, name: propName, index: index});
		},
		// Handler that sends back to Main Panel the new color value and the name of the field
		// it comes from via the onChangeInput function and the index
		onChangeInputG: (event, {color, index, onChangeInput, propName}) => {
			const colors = convertHexToRGB(color);
			const newColor = event.value ? parseInt(event.value) : 0;
			onChangeInput({event: {value: convertRGBToHex([colors[0], newColor, colors[2]])}, name: propName, index: index});
		},
		// Handler that sends back to Main Panel the new color value and the name of the field
		// it comes from via the onChangeInput function and the index
		onChangeInputR: (event, {color, index, onChangeInput, propName}) => {
			const colors = convertHexToRGB(color);
			const newColor = event.value ? parseInt(event.value) : 0;
			onChangeInput({event: {value: convertRGBToHex([newColor, colors[1], colors[2]])}, name: propName, index: index});
		}
	},

	render: ({color, css, onChangeInput, onChangeInputB, onChangeInputG, onChangeInputR, propName, ...rest}) => {
		delete rest.index;
		delete rest.onChangeInput;

		const colors = convertHexToRGB(color);

		return (
			<Layout className={commonCss.inputField}>
				<Cell size="35%">
					<BodyText className={commonCss.labelField}>{propName}</BodyText>
				</Cell>
				<Cell shrink>
					{platform.webos ?
						<ColorPicker {...rest} color={color} onChange={onChangeInput} /> :
						<input {...rest} className={commonCss.colorBlock} onChange={onChangeInput} style={{backgroundColor: color}} type="color" value={color} />
					}
				</Cell>
				<Cell className={css.tripleField}>
					<span>
						<span className={css.tripleText}>R:</span>
						<InputField {...rest} className={css.redInput} css={css} onChange={onChangeInputR} value={colors[0]} />
					</span>
					<span>
						<span className={css.tripleText}>G:</span>
						<InputField {...rest} className={css.greenInput} css={css} onChange={onChangeInputG} value={colors[1]} />
					</span>
					<span>
						<span className={css.tripleText}>B:</span>
						<InputField {...rest} className={css.blueInput} css={css} onChange={onChangeInputB} value={colors[2]} />
					</span>
				</Cell>
			</Layout>
		);
	}
});

export default TripleField;

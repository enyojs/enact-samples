import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import SingleField from '../SingleField/SingleField';
import TripleField from '../TripleField/TripleField';

/**
 * A component that contains either SingleField or TripleField component
 * based on the `propName` prop
 */
const ColorField = kind({
	name: 'ColorField',

	propTypes: {
		/**
		 * Indicates the color displayed in this component
		 *
		 * @type {String}
		 * @required
		 * @public
		 */
		color: PropTypes.string.isRequired,

		/**
		 * Indicates if the component is disabled
		 *
		 * @type {Boolean}
		 * @required
		 * @public
		 */
		disabled: PropTypes.bool.isRequired,

		/**
		 * Indicates this components's position inside a larger list of components
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
		 * Holds the name of the ColorFields
		 *
		 * @type {String}
		 * @required
		 * @public
		 */
		propName: PropTypes.string.isRequired
	},

	render: ({color, disabled, index, onChangeInput, propName, ...rest}) => {
		// As per requirement some colors must be displayed as RGB while other are hex.
		// Our logic is not affected by this as we only use hex, but to display them we decided that if they hold RGB in name we will use
		// TripleField instead of single field.
		const tripleField = propName.includes('RGB');
		return (
			tripleField ?
				<TripleField color={color} disabled={disabled} index={index} onChangeInput={onChangeInput} propName={propName} {...rest} /> :
				<SingleField color={color} disabled={disabled} index={index} onChangeInput={onChangeInput} propName={propName} {...rest} />
		);
	}
});

export default ColorField;

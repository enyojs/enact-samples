import kind from '@enact/core/kind';
import PropTypes from 'prop-types';

import ColorField from '../ColorField/ColorField';
import NameField from '../NameField/NameField';

/**
 * A component that contains all the input fields of the custom-skin application
 * It contains a NameField for the skin and one ColorField for each color that can be customized.
 */
const ColorFields = kind({
	name: 'ColorFields',

	propTypes:{
		/**
		 * Indicates the auto mode
		 *
		 * @type {Boolean}
		 * @required
		 * @public
		 */
		auto: PropTypes.bool.isRequired,

		/**
		 * An array containing all the colors for the variables we support customization for
		 *
		 * @type {Array}
		 * @required
		 * @public
		 */
		colors: PropTypes.array.isRequired,

		/**
		 * Indicates the name of the Skin
		 *
		 * @type {String}
		 * @required
		 * @public
		 */
		name: PropTypes.string.isRequired,

		/**
		 * Setter function that interacts with props `colors` and `name`
		 *
		 * @type {Function}
		 * @required
		 * @public
		 */
		onChangeInput: PropTypes.func.isRequired,

		/**
		 * An array containing all of the names for the variables we support customization for
		 *
		 * @type {Array}
		 * @required
		 * @public
		 */
		propNames: PropTypes.array.isRequired
	},

	render:({auto, colors, name, onChangeInput, propNames, ...rest}) => {
		return (
			<div {...rest}>
				<NameField
					name={name}
					onChangeInput={onChangeInput}
					propName="Skin Name"
				/>
				{colors?.map((color, index) => {
					return (
						<ColorField
							color={color}
							disabled={index < 2 ? false : auto}
							index={index}
							key={index}
							onChangeInput={onChangeInput}
							propName={propNames[index]}
						/>
					);
				})}
			</div>
		);
	}
});

export default ColorFields;

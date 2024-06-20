import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import Spottable from '@enact/spotlight/Spottable';

import * as css from './Kitten.module.less';

const KittenBase = kind({
	name: 'Kitten',

	propTypes: {
		children: PropTypes.string,
		index: PropTypes.number,
		onSelect: PropTypes.func,
		size: PropTypes.number
	},

	defaultProps: {
		size: 300
	},

	styles: {
		css,
		className: 'kitten'
	},

	handlers: {
		onSelect: (ev, {index, onSelect}) => {
			if (onSelect) {
				onSelect({index});
			}
		}
	},

	computed: {
		url: ({index, size}) => {
			return `//loremflickr.com/${size}/${size}/kitten?random=${index}`;
		}
	},

	render: ({children, onSelect, size, url, ...rest}) => {
		delete rest.size;
		delete rest.index;

		return (
			<div {...rest} onClick={onSelect}>
				<img src={url} alt="Kitten" width={size} height={size} />
				<div>{children}</div>
			</div>
		);
	}
});

const Kitten = Spottable(KittenBase);

export default Kitten;
export {Kitten, KittenBase};

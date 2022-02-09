import kind from '@enact/core/kind';
import Button from '@enact/sandstone/Button';
import Popup from '@enact/sandstone/Popup';
import Scroller from '@enact/sandstone/Scroller';
import Toggleable from '@enact/ui/Toggleable';
import TooltipDecorator from '@enact/sandstone/TooltipDecorator';
import {Cell} from '@enact/ui/Layout';
import PropTypes from 'prop-types';

import css from './OutputField.module.less';

import {generateCSS, generateCSSFile} from '../../utils';

const TooltipButton = TooltipDecorator({tooltipDestinationProp: 'decoration'}, Button);

const OutputField = kind({
	name: 'OutputField',

	propTypes:{
		colors: PropTypes.array,
		onToggleOpen: PropTypes.func,
		popupOpen: PropTypes.bool,
		setDefaultState: PropTypes.func,
		skinName: PropTypes.string,
		varNames: PropTypes.array
	},

	handlers:{
		generateFile: (event, {colors, skinName, varNames}) => {
			return generateCSSFile(skinName, generateCSS(colors, skinName, varNames));
		}
	},

	computed: {
		text: ({colors, skinName, varNames}) => {
			return generateCSS(colors, skinName, varNames);
		}
	},

	render: ({generateFile, popupOpen, onToggleOpen, setDefaultState, text}) => {
		function copyToClipboard () {
			/* global navigator */
			return navigator.clipboard?.writeText(text);
		}

		return (
			<Cell size="90%" className={css.outputField}>
				<Popup open={popupOpen} onClose={onToggleOpen} spotlightRestrict="self-only">
					<Scroller>
						<pre className={css.outputData}>
							{text}
						</pre>
					</Scroller>
				</Popup>
				<div className={css.outputBtnContainer}>
					<TooltipButton className={css.outputBtn} icon="folder" minWidth={false} onClick={onToggleOpen} size="small" tooltipText="Show output data">Show output</TooltipButton>
					<TooltipButton className={css.outputBtn} css={css} icon="files" minWidth={false} onClick={copyToClipboard} size="small" tooltipText="Copy to clipboard">Copy</TooltipButton>
					<TooltipButton className={css.outputBtn} css={css} icon="download" minWidth={false} onClick={generateFile} size="small" tooltipText="Get CSS file">Download</TooltipButton>
					<TooltipButton className={css.outputBtn} css={css} icon="refresh" minWidth={false} onClick={setDefaultState} size="small" tooltipText="Restore skin to default colors">Reset</TooltipButton> {/* eslint-disable-line */}
				</div>
			</Cell>
		);
	}});

export default Toggleable({prop: 'popupOpen', toggle: 'onToggleOpen'}, OutputField);

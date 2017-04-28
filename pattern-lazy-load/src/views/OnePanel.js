import React from 'react';
import {Panel, Header} from '@enact/moonstone/Panels';
import LazilyLoad, {importLazy} from '../components/LazilyLoad';

export default class extends React.Component {
	render () {
		const {onClick, ...rest} = this.props;
		return(
			<Panel {...rest}>
				<Header title='Close Popup' />
					<LazilyLoad modules={{
						Button: () => importLazy(import('@enact/moonstone/Button')),
						Slider: () => importLazy(import('@enact/moonstone/Slider'))
					}}>
						{({Slider, Button}) => (
							<div>
								<Button onClick={onClick}></Button>
								<Slider />
								<Slider />
								<Slider />
							</div>
						)}
					</LazilyLoad>
			</Panel>
		);
	}
}
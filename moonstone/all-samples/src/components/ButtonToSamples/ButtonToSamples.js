import Button from '@enact/moonstone/Button';
import {Link} from 'react-router-dom';

import * as css from './ButtonToSamples.module.less';

const ButtonToSamples = () => (
	<div className={css.buttonContainer}>
		<Link to="/" className={css.backLink}>
			<Button
				className={css.backButton}
				style={{zIndex: 1}}
			>
				Back To Samples
			</Button>
		</Link>
	</div>
);

export default ButtonToSamples;

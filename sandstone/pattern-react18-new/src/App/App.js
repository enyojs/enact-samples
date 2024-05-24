import {Header} from '@enact/sandstone/Panels';
import TabLayout, {Tab} from '@enact/sandstone/TabLayout';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import classnames from 'classnames';

import Batching from '../views/Batching/Batching';
import Suspense from '../views/Suspense/Suspense';
import UseTransition from '../views/UseTransition/UseTransition';

import * as css from './App.module.less';

const App = (props) => {
	return (
		<div {...props} className={classnames(props.className, css.app)}>
			<Header noCloseButton title="React 18 Features" type="mini" />
			<TabLayout orientation="horizontal" className={css.tabLayout}>
				<Tab title="Automatic Batching">
					<Batching />
				</Tab>
				<Tab title="Suspense">
					<Suspense />
				</Tab>
				<Tab title="useTransition">
					<UseTransition />
				</Tab>
			</TabLayout>
		</div>
	);
};

export default ThemeDecorator(App);
export {App};

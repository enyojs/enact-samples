/* eslint-disable react/jsx-no-bind,  react/no-unescaped-entities */

import BodyText from '@enact/sandstone/BodyText';
import Button from '@enact/sandstone/Button';
import Scroller from '@enact/sandstone/Scroller';
import Spinner from '@enact/sandstone/Spinner';
import Group from '@enact/ui/Group';
import {Suspense, useState, useTransition} from 'react';

import Content, {ContentUseTransition} from './Content';
import {fetchDataUseTransition} from './FakeApi';

import * as css from './UseTransition.module.less';

const initialResource = fetchDataUseTransition();

const UseTransition = () => {
	const [tab, setTab] = useState(0);
	const [tabUseTransition, setTabUseTransition] = useState(0);
	const [resource, setResource] = useState(initialResource);
	const [isPending, startTransition] = useTransition();

	function handleClick (event) {
		setTab(event.selected);
	}

	function handleClickUseTransition (event) {
		startTransition(() => {
			setTabUseTransition(event.selected);
			setResource(fetchDataUseTransition());
		});
	}

	return (
		<Scroller>
			<div>
				<BodyText className={css.guideText} size="small">
					With React18's 'useTransition' hook, the previous state of the UI can be held until the data is ready. The fetching of the new data is wrapped inside 'startTransition' while the 'isPending' data tells if the content is currently being loaded or not. This allows the possibility to show a loading indicator. Its 'timeoutMs' property specifies how long we’re willing to wait for the transition to finish.
				</BodyText>
				<div className={css.demoContainer}>
					<Group
						childComponent={Button}
						defaultSelected={0}
						itemProps={{size: 'small'}}
						onSelect={(event) => handleClickUseTransition(event)}
						select={'radio'}
						selectedProp="selected"
					>
						{['One', 'Two', 'Three']}
					</Group>
					<div>
						<div className={css.useTransitionContent}>
							<Suspense fallback={<div />}>
								{tabUseTransition === 0 && <ContentUseTransition page="One" resource={resource} />}
								{tabUseTransition === 1 && <ContentUseTransition page="Two" resource={resource} />}
								{tabUseTransition === 2 && <ContentUseTransition page="Three" resource={resource} />}
							</Suspense>
						</div>
						<div className={css.pendingBlock}>
							{isPending ?
								<Spinner transparent /> :
								null}
						</div>
					</div>
				</div>
				<BodyText className={css.guideText} size="small">
					Until React 17, when needing to fetch data before showing some UI that depends on that data, a loading state would have had to manually be set in its place.
					<br />
					When one of the buttons is clicked, the 'Content' component fetches some data. While that data is fetched, a 'Spinner' is loaded in the content's place.
				</BodyText>
				<div className={css.demoContainer}>
					<Group
						childComponent={Button}
						defaultSelected={0}
						itemProps={{size: 'small'}}
						onSelect={(event) => handleClick(event)}
						select={'radio'}
						selectedProp="selected"
					>
						{['One', 'Two', 'Three']}
					</Group>
					<div className={css.content}>
						{tab === 0 && <Content page="One" />}
						{tab === 1 && <Content page="Two" />}
						{tab === 2 && <Content page="Three" />}
					</div>
				</div>
			</div>
		</Scroller>
	);
};

export default UseTransition;

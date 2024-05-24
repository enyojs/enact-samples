import Heading from '@enact/ui/Heading';
import {useCallback, useState} from 'react';

import Nav from '../components/Nav';

import Body from './Body';

import * as css from './MainView.module.less';

const cities = {
	usa: ['San Francisco', 'Los Angeles', 'New York City'],
	spain: ['Madrid', 'Barcelona', 'Valencia'],
	korea: ['Seoul', 'Busan', 'Daegu'],
	japan: ['Tokyo', 'Osaka', 'Kyoto']
};

const countryList = Object.keys(cities);

const MainView = (props) => {
	const [country, setCountry] = useState(countryList[0]);
	const handleCountryChange = useCallback(({data: selectedCountry}) => {
		selectedCountry = selectedCountry.toLowerCase();
		setCountry(selectedCountry);
	}, []);

	return (
		<div {...props} className={css.main}>
			<Heading size="title">
				<div className={css.heading}>
					City Viewer
					<div>
						<Nav
							countryList={countryList}
							defaultSelected={0}
							onCountryChange={handleCountryChange}
						/>
					</div>
				</div>
			</Heading>
			<Body cities={cities} selectedCountry={country} />
		</div>
	);
};

export default MainView;

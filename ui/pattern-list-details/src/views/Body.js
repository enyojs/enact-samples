import {Cell, Row} from '@enact/ui/Layout';
import PropTypes from 'prop-types';
import {useCallback, useEffect, useState} from 'react';

import Content from '../components/Content';
import SideBar from '../components/SideBar';

import * as css from './Body.module.less';

const Body = ({cities, selectedCountry, ...rest}) => {
	const [city, setCity] = useState(cities['usa'][0]);
	const [zoom, setZoom] = useState(false);

	useEffect(() => {
		const nextCity = cities[selectedCountry][0];
		setCity(nextCity);
	}, [cities, selectedCountry]);

	const handleCityChange = useCallback(({data: selectedCity}) => setCity(selectedCity), []);
	const handleZoom = useCallback(() => {
		setZoom(!zoom);
	}, [zoom]);

	return (
		<Row {...rest} className={css.body}>
			<Cell
				cities={cities}
				className={css.sidebar}
				component={SideBar}
				defaultSelected={0}
				onCityChange={handleCityChange}
				selectedCountry={selectedCountry}
				size="30%"
			/>
			<Cell className={css.content}>
				<Content
					onZoom={handleZoom}
					selectedCity={city}
					zoom={zoom}
				/>
			</Cell>
		</Row>
	);
};

Body.propTypes = {
	selectedCountry: PropTypes.string.isRequired,
	cities: PropTypes.object
};

export default Body;

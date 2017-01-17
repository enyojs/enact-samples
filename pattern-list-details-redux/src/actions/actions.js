export const changeCountry = (country) => ({
	type: 'CHANGE_COUNTRY',
	country
});

export const changeCity = (city) => ({
	type: 'CHANGE_CITY',
	city
});

export const changeZoom = (zoom) => ({
	type: 'ZOOM',
	zoom
});

export const updateData = (data) => ({
	type: 'UPDATE_DATA',
	data
});

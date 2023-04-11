const request = require('postman-request');

const geoCode = (address, callback) => {
	const url =
		'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
		encodeURIComponent(address) +
		'.json?access_token=pk.eyJ1IjoiOTEyM3ciLCJhIjoiY2xlZWVzbm1rMDFhYzN4cG95a3AyaDZqZyJ9.6_iXSmoE-vbeDJElDP0Ykg&limit=1';

	request({ url, json: true }, (error, {body}) => {
		if (error) {
			callback('unable to connect to location services!', undefined);
		} else if (body.features.length === 0) {
			callback('unable to connect to location. try another search', undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
			   longitude: body.features[0].center[0],
				location: body.features[0].place_name
			});
		}
	});
};

module.exports = geoCode;

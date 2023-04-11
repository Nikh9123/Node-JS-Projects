const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=53e76c76e13953a6fa97c8cdaf3e26ca&query=${latitude},${longitude}`;
	request({url, json: true }, (error, {body}) => {
		if (error) {
			callback('pls check your internet connection', undefined);
		} else if (body.success === false) {
			callback('oops there is problem with your link', undefined);
		} else {
			callback(undefined, 
				`${body.current.weather_descriptions[0]} currently and feels like ${body.current.feelslike}℃. There is ${body.current.precip}% chance of rain`);
		}
	});
};

module.exports = forecast;

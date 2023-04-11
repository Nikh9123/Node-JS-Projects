const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast') ;

const address = process.argv[2];
// console.log(process.argv);

geocode(address, (error, {latitude ,longitude ,location}={}) => {
		if(error)
    return console.log(error);
    forcast(latitude,longitude, (error, forcastData) => {
      if(error)
      return console.log(error)
     console.log(location);
     console.log(forcastData);
    });
});

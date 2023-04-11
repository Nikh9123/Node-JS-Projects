const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiOTEyM3ciLCJhIjoiY2xlZWVzbm1rMDFhYzN4cG95a3AyaDZqZyJ9.6_iXSmoE-vbeDJElDP0Ykg&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})
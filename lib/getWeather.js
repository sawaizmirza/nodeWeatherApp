const request = require('request');
const {promisify} = require('util');

const promisifiesRequest = promisify(request);

const getWeather = async (location) => {
    let data = await promisifiesRequest({
uri:`https://api.openweathermap.org/data/2.5/find?q=${location}&APPID=${process.env.APPID}`,
json: true
    });
    
    return data.body;

}


module. exports = getWeather;
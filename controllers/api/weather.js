const Weather = require('../../models/weather');
const axios = require('axios');

module.exports = {
    index
};

async function index(req, res) {

        try {
          const options = {
            method: 'GET',
            url: 'https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode',
            params: { zip: '94111' },
            headers: {
              'X-RapidAPI-Key': 'edaae89300mshbb2ddde45808382p178b2cjsn7b04de6cb9db',
              'X-RapidAPI-Host': 'us-weather-by-zip-code.p.rapidapi.com',
            },
          };
      
          const response = await axios.request(options);
          const weatherData = response.data;
      
          res.json(weatherData);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while fetching weather data.' });
        }
      }


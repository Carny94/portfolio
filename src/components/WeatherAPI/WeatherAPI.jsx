
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function WeatherAPI() {

    const apiUrl = 'https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode';
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [zipCode, setZipCode] = useState('')

    async function fetchWeatherAPI(e) {
        e.preventDefault();
        setLoading(true);
      
        // Call the API
        const url = 'https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode?zip=94111';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '12a4b4ba0cmsh9074a19993d025ap11dcadjsn2e38c75c3586',
            'X-RapidAPI-Host': 'us-weather-by-zip-code.p.rapidapi.com'
          }
        };
      
        try {
          const response = await fetch(url, options);
          const result = await response.text();
          console.log(result);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
        
    //------------------------Event Handleres------------------------------//


    return (
        <div className="rectangle-container">
      <h5>Local Weather</h5>
      <form onSubmit={fetchWeatherAPI}>
        <input
          type="text"
          placeholder="Enter your zip code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Weather Data</h1>
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
        }

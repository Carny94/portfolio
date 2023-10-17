
import React, { useState, useEffect } from 'react';

export default function WeatherAPI () {

const [zip, setZip] = useState("");
const [temperature, setTemperature] = useState(null);

const apiKey = 'edaae89300mshbb2ddde45808382p178b2cjsn7b04de6cb9db';
const apiUrl = 'https://open-weather13.p.rapidapi.com/city/';
const options = {
method: 'GET',
headers: {
  'X-RapidAPI-Key': apiKey,
  'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
}
};

//----------------------CAll of API----------

async function fetchTemperature (zipCode) { 
  try {
    const response = await fetch(`${apiUrl}${zipCode}`, options);
    if(response.ok) {
      const data = await response.json();
      setTemperature(data.main.temp)
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
        setTemperature(null)
    }
  }  catch (error) {
    console.error(error);
    setTemperature(null);
  }
}
//---------------eventListeners---------------

const handleZipChange = (e) => {
  setZip(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  fetchTemperature(zip);
};


return (
   <>
     <h5>Weather by Zip</h5>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={zip} onChange={handleZipChange} placeholder="Enter Zipcode"/>
        </label>
        <button type="submit">Get Temp</button>
      </form>
      {/* fix below error */}
      {temperature !== null && (
  <div>
    <h1>Temperature</h1>
    <p>{((temperature * 9/5) + 32).toFixed(2)}°F</p>
  </div>
)}
   </>
 );
}




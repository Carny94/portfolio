
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function WeatherAPI () {


const url = 'https://open-weather13.p.rapidapi.com/city/landon';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'edaae89300mshbb2ddde45808382p178b2cjsn7b04de6cb9db',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

const button = document.querySelector('button')
const results = document.querySelector('.results')
const temp = document.querySelector('.temp')
const feelTemp = document.querySelector('.feeltemp')
const input = document.querySelector('input')


async function fetchAPI () { 

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}

//---------------eventListeners---------------


return (
<>

<h5> Weather App </h5>
<input type="text" placeholder="search"></input>
<button>SEARCH</button>

<div className="results">
  <h1>temp:</h1>
  <p className='temp'>75</p>
  <h1>Feels Like:</h1>
  <p className="feeltemp">60</p>
</div>

</>

)}



























































// export default function WeatherAPI() {

//     const [weatherData, setWeatherData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [zipCode, setZipCode] = useState('')

//     async function fetchWeatherAPI(e) {
//         e.preventDefault();
//         setLoading(true);
      
//         // Call the API
//         const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
//         const options = {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': '12a4b4ba0cmsh9074a19993d025ap11dcadjsn2e38c75c3586',
//             'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//                   }
//         };
      
//         try {
//           const response = await fetch(url, options);
//           const result = await response.text();
//           console.log(result);
//         } catch (error) {
//           console.error(error);
//         } finally {
//           setLoading(false);
//         }
//       }
        
//     //------------------------Event Handleres------------------------------//


//     return (
//         <div className="rectangle-container">
//       <h5>Local Weather</h5>
//       <form onSubmit={fetchWeatherAPI}>
//         <input
//           type="text"
//           placeholder="Enter your zip code"
//           value={zipCode}
//           onChange={(e) => setZipCode(e.target.value)}
//         />
//         <button type="submit">Get Weather</button>
//       </form>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h1>Weather Data</h1>
//           <pre>{JSON.stringify(weatherData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
//         }

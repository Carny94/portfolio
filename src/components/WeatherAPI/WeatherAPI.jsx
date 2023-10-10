
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function WeatherAPI() {

    const apiUrl = 'https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode';
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);


    async function fetchWeatherAPI() {

//-------CALL OF API-----///
        try {
            const response = await axios.get(apiUrl);
            setWeatherData(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }
//------------------------Event Handleres------------------------------//


    return (
<>
        <div className="rectangle-container">
            <h5>weather </h5>
            <form onSubmit={fetchWeatherAPI}>
                








            </form>
        </div>




        </>
    )

}


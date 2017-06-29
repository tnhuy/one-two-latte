import axios from 'axios';

//Create API key from openweathermap then create a const or var call API_KEY
const API_KEY = '4caea99dbcd0cfcbbb7e92c5203cbf96';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const URL = `${ROOT_URL}&q=${city},us`;

	const request = axios.get(URL);

	console.log('Request: ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
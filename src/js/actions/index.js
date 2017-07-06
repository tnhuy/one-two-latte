import axios from 'axios';
//Create API key from openweathermap then create a const or var call API_KEY
const API_KEY = '4caea99dbcd0cfcbbb7e92c5203cbf96';
const POST_KEY = '?key=TNPOST1234';
const WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const POST_URL = 'http://reduxblog.herokuapp.com/api'

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
//actions creator are these export function below which call third party api
export function fetchWeather(city){
	const URL = `${WEATHER_URL}&q=${city},us`;
	const request = axios.get(URL);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

export function fetchPosts(){
	const request = axios.get(`${POST_URL}/posts${POST_KEY}`);
	console.log('Request: ', request);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback){
	const request = axios.post(`${POST_URL}/posts${POST_KEY}`, values)
	.then(() => callback());
	return {
		type: CREATE_POST,
		payload: request
	};
}

export function  fetchPost(id){
	const request = axios.get(`${POST_URL}/posts/${id}${POST_KEY}`);
	return {
		type: FETCH_POST,
		payload: request
	};
}

export function  deletePost(id, callback){
	const request = axios.delete(`${POST_URL}/posts/${id}${POST_KEY}`)
	.then(() => callback());
	return {
		type: DELETE_POST,
		payload: id
	};
}
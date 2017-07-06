import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	weather : WeatherReducer,
	posts : PostsReducer,
	form : formReducer
});

export default rootReducer;
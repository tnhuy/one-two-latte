import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	switch (action.type) {
		case FETCH_WEATHER:
			// Never mutate state
			// return state.push(action.payload.data);
			// concat doesn't change the existing array, it creates a new array
			// that contains all the old stuff and new stuff

			// return state.concat([action.payload.data]);
			// above code can be written like this
			return [ action.payload.data, ...state ];	
		default:
	}
	return state;
}

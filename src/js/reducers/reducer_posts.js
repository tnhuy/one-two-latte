import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
	switch (action.type) {
		case FETCH_POSTS:
			console.log(action.payload.data);
			// Never mutate state
			// return state.push(action.payload.data);
			// concat doesn't change the existing array, it creates a new array
			// that contains all the old stuff and new stuff

			// return state.concat([action.payload.data]);
			// above code can be written like this
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_POST:
			return {...state, [action.payload.data.id]: action.payload.data };	
		default: return state;
	}
}
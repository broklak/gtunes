import * as types from '../actions/videoAction';

export default function (state = null, action) {
	switch(action.type) {
		case types.LIST_VIDEOS:
			return action.payload.data;
		default:
			return state;
	}
}
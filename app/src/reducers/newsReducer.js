import * as types from '../actions/newsAction';

export default function (state = null, action) {
	switch(action.type) {
		case types.LIST_NEWS:
			return action.payload.data;
		default:
			return state;
	}
}
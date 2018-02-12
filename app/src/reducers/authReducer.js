import * as types from '../actions/authAction';

export default function (state = null, action) {
	switch(action.type) {
		case types.LOGIN:
			return (action.payload) ? action.payload : null;
		default:
			return state;
	}
}
import * as types from '../actions/artistAction';

export default function (state = null, action) {
	switch(action.type) {
		case types.LIST_ARTIST:
			return (action.payload.data.data) ? action.payload.data.data : null;
		default:
			return state;
	}
}
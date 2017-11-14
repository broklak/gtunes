import * as types from '../actions/songAction';

export default function (state = null, action) {
	switch(action.type) {
		case types.PLAY_SONG:
			return (action.payload.data) ? action.payload.data : state;
		default:
			return state;
	}
}
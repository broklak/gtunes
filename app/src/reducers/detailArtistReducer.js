import * as types from '../actions/artistAction';

export default function (state = { artist: {}, songs: [] }, action) {
	switch(action.type) {
		case types.DETAIL_ARTIST:
			return {
				...state,
					artist: action.payload.data.artist,
					songs: 	action.payload.data.songs
			}
		default:
			return state;
	}
}
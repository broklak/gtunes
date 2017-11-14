import * as types from '../actions/genreAction';

export default function (state = { genre: {}, songs: [] }, action) {
	switch(action.type) {
		case types.DETAIL_GENRE:
			return {
				...state,
					genre: (action.payload.data.genre) ? action.payload.data.genre : state.genre,
					songs: 	(action.payload.data.songs) ? action.payload.data.songs : state.songs
			}
		default:
			return state;
	}
}
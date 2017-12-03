import * as types from '../actions/genreAction';

export default function (state = { genre: {}, songs: [] }, action) {
	switch(action.type) {
		case types.DETAIL_GENRE:
			return {
				...state,
					genre: (action.payload.data.data.genre) ? action.payload.data.data.genre : state.genre,
					songs: 	(action.payload.data.data.songs) ? action.payload.data.data.songs : state.songs
			}
		default:
			return state;
	}
}
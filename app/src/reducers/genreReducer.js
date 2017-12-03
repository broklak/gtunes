import * as types from '../actions/genreAction';

export default function (state = { list: [] }, action) {
	switch(action.type) {
		case types.LIST_GENRE:
			return {
				...state,
					list: (action.payload.data.data) ? action.payload.data.data : state.list
			}
		default:
			return state;
	}
}
import * as types from '../actions/paymentAction';

export default function (state = { package: [] }, action) {
	switch(action.type) {
		case types.LIST_PACKAGE:
			return {
				...state,
					package: (action.payload.data.data) ? action.payload.data.data : []
			}
		default:
			return state;
	}
}
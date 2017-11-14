import axios from 'axios';
import { API_HOST_URL } from '../../config/settings';

export const LIST_ARTIST = 'list_artist';
export const DETAIL_ARTIST = 'detail_artist';

export const fetchListArtist = () => {
	let request = axios.get(`${API_HOST_URL}/artist`);
	return {
		type: LIST_ARTIST,
		payload: request
	}
}

export const fetchDetailArtist = (artistId) => {
	let request = axios.get(`${API_HOST_URL}/artist/${artistId}`);
	return {
		type: DETAIL_ARTIST,
		payload: request
	}
}
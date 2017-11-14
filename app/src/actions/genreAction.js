import axios from 'axios';
import { API_HOST_URL } from '../../config/settings';

export const LIST_GENRE = 'list_genre';
export const DETAIL_GENRE = 'detail_genre';

export const fetchListGenre = () => {
	let request = axios.get(`${API_HOST_URL}/genre`);
	return {
		type: LIST_GENRE,
		payload: request
	}
}

export const fetchDetailGenre = (genreId) => {
	let request = axios.get(`${API_HOST_URL}/genre/${genreId}`);
	return {
		type: DETAIL_GENRE,
		payload: request
	}
}
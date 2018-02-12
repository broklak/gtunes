import axios from 'axios';
import { API_HOST_URL } from '../../config/settings';

export const store = (data) => {
	let params = {
		type		: data.type,
		activity	: data.activity,
		content_id	: data.content,
		artist_id	: data.artist,
		user		: data.user,
		source		: 'android'
	}

	let request = axios.post(`${API_HOST_URL}/behaviour`, params);
}
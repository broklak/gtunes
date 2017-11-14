import axios from 'axios';
import { API_HOST_URL } from '../../config/settings';

export const LIST_NEWS = 'list_news';

export const fetchListNews = () => {
	let request = axios.get(`${API_HOST_URL}/news`);
	return {
		type: LIST_NEWS,
		payload: request
	}
}
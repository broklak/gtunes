import axios from 'axios';
import { API_HOST_URL } from '../../config/settings';

export const LIST_VIDEOS = 'list_videos';

export const fetchListVideos = () => {
	let request = axios.get(`${API_HOST_URL}/video`);
	return {
		type: LIST_VIDEOS,
		payload: request
	}
}
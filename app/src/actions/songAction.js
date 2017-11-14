import axios from 'axios';
import { API_HOST_URL } from '../../config/settings';

export const PLAY_SONG = 'play_song';

export const playSong = (songId) => {
	let request = axios.get(`${API_HOST_URL}/song/${songId}`);
	return {
		type: PLAY_SONG,
		payload: request
	}
}
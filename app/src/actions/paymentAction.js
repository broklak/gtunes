import axios from 'axios';
import { API_HOST_URL } from '../../config/settings';

export const LIST_PACKAGE = 'list_package';

export const fetchListPackage = () => {
	let request = axios.get(`${API_HOST_URL}/package`);
	return {
		type: LIST_PACKAGE,
		payload: request
	}
}
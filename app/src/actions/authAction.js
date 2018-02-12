import axios from 'axios';
import { API_HOST_URL } from '../../config/settings';

export const LOGIN = 'login';
export const CHECK = 'check';

export const login = (username, password, callback, error) => {
	let request = axios.post(`${API_HOST_URL}/login`, { username, password })
						.then(callback)
						.catch(error);
	
	return {
		type: LOGIN,
		payload: request
	}
}

export const check = (msisdn, callback, error) => {
	let request = axios.get(`${API_HOST_URL}/check-package/${msisdn}`)
						.then(callback)
						.catch(error);
	
	return {
		type: CHECK,
		payload: request
	}
}
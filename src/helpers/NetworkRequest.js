/**
 * @author Azhary Arliansyah
 * @company Pudinglab
 *
 * Helper functions for doing network request
 */

import { BASE_URL } from '../config/Config';

export function Request( url, method, data ) {

	let http = {
		method: method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};

	if ( method == 'POST' ) 
	{
		let body = '';
		let keys = Object.keys( data );
		for ( let i = 0; i < keys.length; i++ ) 
		{
			body += keys[i] + '=' + data[keys[i]];
			if ( i < keys.length - 1 ) body += '&';
		}

		http.body = body;
	}

	return fetch(BASE_URL + url, http)
	.then(( response ) => response.json());


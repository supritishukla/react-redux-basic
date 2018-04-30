import axios from 'axios';
export const FETCH_MOVIE = 'FETCH_MOVIE';

const API_URL = `https://api.github.com/search/repositories?`;

export function movieSearchAction(term) {
	console.log(term);
	//const url = `${API_URL}&q=${term}`
    const url = `${API_URL}&q=tetris`
    const request = axios.get(url);

    return {
        type: FETCH_MOVIE,
        payload: request
    };
}
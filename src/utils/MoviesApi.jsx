import { API_ADDITIONAL_CONFIG } from './utils';

class MovieAPI {
  constructor(config) {
    this._headers = config.headers;
    this._url = config.url;
  }

  _serverResponse = res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

  getAllMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._serverResponse);
  }

  getSrcMovie(name) {
    return fetch(`${this._url}${name}`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._serverResponse);
  }

}

export const api_movies = new MovieAPI(API_ADDITIONAL_CONFIG)
import { API_MAIN_CONFIG } from'./utils.js';

class MainAPI {
  constructor(config){
    this._headers = config.headers;
    this._url = config.url;
  }

  _serverResponse = res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

  getAllMovies(token) {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
    })
    .then(this._serverResponse);
  }

  createMovies(data) {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    })
    .then(this._serverResponse);
  }

  deleteMovieById(id) {
    return fetch(`${this._url}/movies/${id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._serverResponse);
  }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
    })
    .then(this._serverResponse);
  }

  updateUserProfile(data) {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    })
    .then(this._serverResponse);
  }
}

export const api_main = new MainAPI(API_MAIN_CONFIG);

import { BASE_URL } from "./utils";

const checkResponse = res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.statusText}`);

export const register = ({name, password, email}) => {
  return fetch(`${BASE_URL}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, password, email})
  })
  .then(checkResponse);
}

export const authorization = ({email, password}) => {
  return fetch(`${BASE_URL}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResponse);
}
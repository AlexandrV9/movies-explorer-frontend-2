export const BASE_URL = 'https://api.movies.explorer.alexv.nomoredomains.club';
export const ADDITIONAL_URL = "https://api.nomoreparties.co";

export const API_MAIN_CONFIG = {
  url: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}

export const API_ADDITIONAL_CONFIG = {
  url: ADDITIONAL_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}

export const handleCompareArraysMovies = (allMovies, allSaveMovies) => {
  return allMovies.map((itemAllMovies) => {
    return allSaveMovies.find((itemSaveMovies) => {
      return itemSaveMovies.movieId === itemAllMovies.id;
    }) 
      ? {...itemAllMovies, isLike: true}
      : {...itemAllMovies, isLike: false}
  })
} 
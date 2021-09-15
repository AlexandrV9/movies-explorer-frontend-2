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
    let savedMovieId;
    return allSaveMovies.find((itemSaveMovies) => {
      if(itemSaveMovies.movieId === itemAllMovies.id) {
        savedMovieId = itemSaveMovies._id;
        return true;
      } else {
        return false;
      }
      // return itemSaveMovies.movieId === itemAllMovies.id;
    }) 
      ? {...itemAllMovies, isLike: true, _id: savedMovieId}
      : {...itemAllMovies, isLike: false }
  })
}

export const handleСorrectTimeDisplay = (duration) => {
  if(duration / 60 < 1) {
    return duration + 'м';
  } else {
    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;
    if(minutes === 0){
      return hours + 'ч ';
    } else {
      return  hours + 'ч ' + minutes + 'м';
    }
  }
}
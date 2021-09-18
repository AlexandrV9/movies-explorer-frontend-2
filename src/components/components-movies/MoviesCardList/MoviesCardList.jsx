import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';
import {
  TABLET_SCREEN_WIDTH,
  PHONE_SCREEN_WIDTH,
  NUMBER_INITIALLY_MOVIES_TABLET,
  NUMBER_INITIALLY_MOVIES_PHONE,
  NUMBER_ADDED_MOVIES_TABLET,
  NUMBER_ADDED_MOVIES_PHONE,
  NUMBER_INITIALLY_MOVIES_LAPTOP,
} from '../../../utils/constants'

function MoviesCardList ({ 
  pathIconNotesInactive, 
  pathIconNotesActive, 
  movies,
  isActivePreloader,
  onSaveMovie,
}) {

  const [isActive, setIsActive] = React.useState(false);
  const [movieCount, setMovieCount] = React.useState(NUMBER_INITIALLY_MOVIES_LAPTOP);

  const limitSortedMovies = movies.slice(0, movieCount);

  const toAddCountMovies = () => {
    if ((movies.length > 0 && movies.length < movieCount) || movies.length === 0 || limitSortedMovies.length === movies.length) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  const hadnleShowMovies = () => {
    if(window.innerWidth < TABLET_SCREEN_WIDTH){
      setMovieCount(NUMBER_INITIALLY_MOVIES_TABLET);
    }
    if(window.innerWidth < PHONE_SCREEN_WIDTH) {
      setMovieCount(NUMBER_INITIALLY_MOVIES_PHONE);
    } 
  }

  const handleAddInstallInitiaLimitMovies = () => {
    if(window.innerWidth < TABLET_SCREEN_WIDTH){
      setMovieCount(prevCount => prevCount + NUMBER_ADDED_MOVIES_TABLET);
    } else {
      setMovieCount(prevCount => prevCount + NUMBER_ADDED_MOVIES_PHONE);
    }
        
  }

  React.useEffect(() => {
    hadnleShowMovies();
  },[])

  React.useEffect(() => {
    toAddCountMovies(movies);
  },[movies, limitSortedMovies]);

  return (
    isActivePreloader ? 
    <Preloader /> :
    (
      <section className="movies-card-list">
        <ul className="movies-card-list__unordered-list">

          {
            limitSortedMovies.map((movie) => 
              <MoviesCard 
                key={movie.movieId}
                movie={movie}
                pathIconNotesInactive={pathIconNotesInactive}
                pathIconNotesActive ={pathIconNotesActive}
                onSaveMovie={onSaveMovie}
              />
            )
          }
        </ul>

        {isActive ? <button className="button movies-card-list__button" onClick={handleAddInstallInitiaLimitMovies}>Ещё</button> : ''}
      </section>
    )
  );
}

export default MoviesCardList;
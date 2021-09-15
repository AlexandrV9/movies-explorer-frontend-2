import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';

function MoviesCardList ({ 
  pathIconNotesInactive, 
  pathIconNotesActive, 
  movies,
  isActivePreloader,
  onSaveMovie,
}) {

  const [isActive, setIsActive] = React.useState(false);
  const [movieCount, setMovieCount] = React.useState(12);

  const limitSortedMovies = movies.slice(0, movieCount);

  const toAddCountMovies = () => {
    if ((movies.length > 0 && movies.length < movieCount) || movies.length === 0 || limitSortedMovies.length === movies.length) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  const hadnleShowMovies = () => {
    if(window.innerWidth < 768){
      setMovieCount(8);
    }
    if(window.innerWidth < 480) {
      setMovieCount(5);
    } 
  }


  const handleAddInstallInitiaLimitMovies = () => {
    if(window.innerWidth < 768){
      setMovieCount(prevCount => prevCount + 2);
    } else {
      setMovieCount(prevCount => prevCount + 3);
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
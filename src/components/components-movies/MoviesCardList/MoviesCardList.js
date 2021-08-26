import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import cardPath from '../../../images/1.jpg';
import { useLocation } from 'react-router-dom';

function MoviesCardList ({ 
  deleteButtonSaveMoviesClick,
  pathIconNotesInactive, 
  pathIconNotesActive, 
  saveMovies,
  setSaveMovies,
  sortedMovies,
  children,
  handleButtonSaveMoviesClick,
}) {

  const location = useLocation();
  return (
    <section className="movies-card-list">
        <ul className="movies-card-list__unordered-list">
          {
            location.pathname === '/saved-movies' ? 
            (saveMovies.map((movie) => 
              <MoviesCard 
                deleteButtonSaveMoviesClick={deleteButtonSaveMoviesClick}
                movie = {movie}
                saveMovies={saveMovies}
                key={movie.id}
                pathIconNotesInactive={pathIconNotesInactive}
                pathIconNotesActive ={pathIconNotesActive}
              />)
            )
            :
            (sortedMovies.map((movie) => 
              <MoviesCard 
                handleButtonSaveMoviesClick={handleButtonSaveMoviesClick}
                saveMovies={saveMovies}
                setSaveMovies={setSaveMovies}
                movie = {movie}
                key={movie.id}
                pathIconNotesInactive={pathIconNotesInactive}
                pathIconNotesActive ={pathIconNotesActive}
              />)
            )


          }
          
        {/* <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/>
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/>
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/>
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/>
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/> */}
        {/* <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} /> */}
        {/* <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} /> */}

      </ul>
      {children}
    </section>
  );
}

export default MoviesCardList;
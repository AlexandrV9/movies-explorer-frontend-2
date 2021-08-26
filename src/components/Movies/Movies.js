import React from 'react';
import Header from '../ReusedBlocks/Header/Header';
import Footer from '../ReusedBlocks/Footer/Footer';
import SearchForm from '../components-movies/SearchForm/SearchForm';
import MoviesCardList from '../components-movies/MoviesCardList/MoviesCardList';
import Navigation from '../ReusedBlocks/Navigation/Navigation';
import pathIconNotesInactive from '../../images/icon-notes.svg';
import pathIconNotesActive from '../../images/icon-notes-active.svg';

function Movies({
  movies,
  saveMovies,
  sortedMovies,
  onSortMovies,
  setSaveMovies,
  handleButtonSaveMoviesClick,
}) {
  // console.log(movies);
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <SearchForm 
        movies={movies}
        onSortMovies={onSortMovies}
      />
      <MoviesCardList 
        handleButtonSaveMoviesClick={handleButtonSaveMoviesClick}
        saveMovies={saveMovies}
        setSaveMovies={setSaveMovies}
        pathIconNotesInactive={pathIconNotesInactive} 
        pathIconNotesActive={pathIconNotesActive}
        sortedMovies={sortedMovies}
        movies={movies}
      >
        <button className="button movies-card-list__button">Ещё</button>
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default Movies;
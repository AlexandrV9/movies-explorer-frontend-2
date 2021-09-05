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
  sortedMovies,
  onSortMovies,
  isActivePreloader,
  isAnswerSearch,
  onIsAnswerSearch,
  onIsActivePreloader,
  onIsClickButtonSearch,
  onAddSaveMovies,
  onSaveMovie,
}) {

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="main">
        <SearchForm 
          movies={movies}
          onSortMovies={onSortMovies}
          onIsActivePreloader={onIsActivePreloader}
          onIsAnswerSearch={onIsAnswerSearch}
          onIsClickButtonSearch={onIsClickButtonSearch}
        />
        {isAnswerSearch ?
          <p className="search-form__text-result">Ничего не найдено</p>
          :
          <MoviesCardList 
            movies={sortedMovies}
            isActivePreloader={isActivePreloader}
            onAddSaveMovies={onAddSaveMovies}
            pathIconNotesInactive={pathIconNotesInactive} 
            pathIconNotesActive={pathIconNotesActive}
            onSaveMovie={onSaveMovie}
          >
          </MoviesCardList>
        }
        
      </main>
      
      <Footer />
    </>
  );
}

export default Movies;
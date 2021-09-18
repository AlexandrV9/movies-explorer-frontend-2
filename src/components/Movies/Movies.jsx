import React from 'react';
import Header from '../ReusedBlocks/Header/Header';
import Footer from '../ReusedBlocks/Footer/Footer';
import SearchForm from '../components-movies/SearchForm/SearchForm';
import MoviesCardList from '../components-movies/MoviesCardList/MoviesCardList';
import Navigation from '../ReusedBlocks/Navigation/Navigation';
import pathIconNotesInactive from '../../images/icon-notes.svg';
import pathIconNotesActive from '../../images/icon-notes-active.svg';
import Preloader from '../Preloader/Preloader';

function Movies({
  movies,
  sortedMovies,
  handleSortMovies,
  isActivePreloader,
  isAnswerSearch,
  onIsActivePreloader,
  onIsClickButtonSearch,
  onAddSaveMovies,
  onSaveMovie,
  handleShowShortFilms,
  handleShowChecked,
  checkedSort,
  handleCheckedSort
}) {

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="main">
        <SearchForm 
          checkedSort={checkedSort}
          movies={movies}
          handleSortMovies={handleSortMovies}
          onIsActivePreloader={onIsActivePreloader}
          onIsClickButtonSearch={onIsClickButtonSearch}
          handleShowShortFilms={handleShowShortFilms}
          handleShowChecked={handleShowChecked}
          handleCheckedSort={handleCheckedSort}
        />
        {isActivePreloader ? <Preloader /> :

        isAnswerSearch ?
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
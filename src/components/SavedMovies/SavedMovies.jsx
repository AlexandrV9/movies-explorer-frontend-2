import React from 'react';
import Header from "../ReusedBlocks/Header/Header";
import MoviesCardList from "../components-movies/MoviesCardList/MoviesCardList";
import Footer from '../ReusedBlocks/Footer/Footer';
import SearchForm from "../components-movies/SearchForm/SearchForm";
import Navigation from "../ReusedBlocks/Navigation/Navigation";
import pathIconNotesInactive from '../../images/icon-notes-delete.svg';
import Preloader from '../Preloader/Preloader';

function SavedMovies ({
  saveMovies,
  deleteButtonSaveMoviesClick,
  onDeleteSaveMovies,
  handleSortSaveMovies,
  onSaveMovie,
  onIsActivePreloader,
  onIsClickButtonSearch,
  sortedSaveMovies,
  isAnswerSearchSaveMovies,
  handleShowShortSaveFilms,
  checkedSave,
  isActivePreloader,
  handleCheckedSave,
}) {

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="main">
        <SearchForm 
          movies={saveMovies}
          handleSortSaveMovies={handleSortSaveMovies}
          onIsActivePreloader={onIsActivePreloader}
          onIsClickButtonSearch={onIsClickButtonSearch}
          handleShowShortSaveFilms={handleShowShortSaveFilms}
          checkedSave={checkedSave}
          handleCheckedSave={handleCheckedSave}
        />
        { isActivePreloader ? <Preloader /> :
         isAnswerSearchSaveMovies ? 
          <p className="search-form__text-result">Ничего не найдено</p>
          :
        <MoviesCardList
          onSaveMovie={onSaveMovie}
          movies={sortedSaveMovies}
          onDeleteSaveMovies={onDeleteSaveMovies}
          deleteButtonSaveMoviesClick={deleteButtonSaveMoviesClick}
          pathIconNotesInactive={pathIconNotesInactive}
        />
        
      }
      </main>
      
      <Footer />
    </>
  );
}

export default SavedMovies;
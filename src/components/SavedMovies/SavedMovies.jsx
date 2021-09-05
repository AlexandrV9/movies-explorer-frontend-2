import React from 'react';
import Header from "../ReusedBlocks/Header/Header";
import MoviesCardList from "../components-movies/MoviesCardList/MoviesCardList";
import Footer from '../ReusedBlocks/Footer/Footer';
import SearchForm from "../components-movies/SearchForm/SearchForm";
import Navigation from "../ReusedBlocks/Navigation/Navigation";
import pathIconNotesInactive from '../../images/icon-notes-delete.svg';

function SavedMovies ({
  saveMovies,
  deleteButtonSaveMoviesClick,
  onDeleteSaveMovies,
  onSortMovies,
  onSaveMovie,
  onIsActivePreloader,
  onIsAnswerSearch,
  onIsClickButtonSearch,
  sortedSaveMovies,
}) {

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main className="main">
        <SearchForm 
          movies={saveMovies}
          onSortMovies={onSortMovies}
          onIsActivePreloader={onIsActivePreloader}
          onIsAnswerSearch={onIsAnswerSearch}
          onIsClickButtonSearch={onIsClickButtonSearch}
        />
        <MoviesCardList
          onSaveMovie={onSaveMovie}
          movies={sortedSaveMovies}
          onDeleteSaveMovies={onDeleteSaveMovies}
          deleteButtonSaveMoviesClick={deleteButtonSaveMoviesClick}
          pathIconNotesInactive={pathIconNotesInactive}
        />)
      </main>
      
      <Footer />
    </>
  );
}

export default SavedMovies;
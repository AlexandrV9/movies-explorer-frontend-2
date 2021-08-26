import React from 'react';
import Header from "../ReusedBlocks/Header/Header";
import MoviesCardList from "../components-movies/MoviesCardList/MoviesCardList";
import Footer from '../ReusedBlocks/Footer/Footer';
import SearchForm from "../components-movies/SearchForm/SearchForm";
import Navigation from "../ReusedBlocks/Navigation/Navigation";
import pathIconNotesInactive from '../../images/icon-notes-delete.svg';

function SavedMovies ({
  movies,
  saveMovies,
  setSaveMovies,
  deleteButtonSaveMoviesClick,
}) {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <SearchForm 
        movies={movies}
      />
      <MoviesCardList
        deleteButtonSaveMoviesClick={deleteButtonSaveMoviesClick}
        saveMovies={saveMovies}
        setSaveMovies={setSaveMovies}
        pathIconNotesInactive={pathIconNotesInactive}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
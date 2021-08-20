import Header from '../ReusedBlocks/Header/Header';
import Footer from '../ReusedBlocks/Footer/Footer';
import SearchForm from '../components-movies/SearchForm/SearchForm';
import MoviesCardList from '../components-movies/MoviesCardList/MoviesCardList';
import Navigation from '../ReusedBlocks/Navigation/Navigation';
import pathIconNotesInactive from '../../images/icon-notes.svg';
import pathIconNotesActive from '../../images/icon-notes-active.svg';

function Movies() {
  return (
    <>
      <Header>
      <Navigation />
      </Header>
      <SearchForm />
      <MoviesCardList pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}>
        <button className="button movies-card-list__button">Ещё</button>
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default Movies;
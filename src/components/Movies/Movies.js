import Header from '../ReusedBlocks/Header/Header';
import Footer from '../ReusedBlocks/Footer/Footer';
import SearchForm from '../components-movies/SearchForm/SearchForm';
import MoviesCardList from '../components-movies/MoviesCardList/MoviesCardList';
import Navigation from '../ReusedBlocks/Navigation/Navigation';

function Movies() {
  return (
    <>
      <Header>
      <Navigation />
      </Header>
      <SearchForm />
      <MoviesCardList>
        <button className="movies-card-list__button">Ещё</button>
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default Movies;
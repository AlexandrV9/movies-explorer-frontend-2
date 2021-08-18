import Header from "../ReusedBlocks/Header/Header";
import MoviesCardList from "../components-movies/MoviesCardList/MoviesCardList";
import Footer from '../ReusedBlocks/Footer/Footer';
import SearchForm from "../components-movies/SearchForm/SearchForm";
import Navigation from "../ReusedBlocks/Navigation/Navigation";

function SavedMovies () {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
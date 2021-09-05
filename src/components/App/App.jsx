import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../ Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Switch, useHistory } from 'react-router';
import { CurrentUser } from '../../contexts/CurrentUser';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../ReusedBlocks/InfoTooltip/InfoTooltip';
import * as moviesAuth from '../../utils/MoviesAuth';

import { api_main } from '../../utils/MainApi';
import { api_movies } from '../../utils/MoviesApi';
import { handleCompareArraysMovies } from '../../utils/utils';

import './App.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

import pathRegComp from '../../images/completed-registration.svg';
import pathRegFail from '../../images/failed-registration.svg'

function App() {

  const [movies, setMovies] = React.useState([]); // изначальный преобразованный массив фильмов
  const [saveMovies, setSaveMovies] = React.useState([]); // массив с сохранёнными фильмами
  const [sortedMovies, setSortedMovies] = React.useState([]); // отсортированный массив с фильмами
  const [sortedSaveMovies, setSortedArraySaveMovies] = React.useState([]);

  const [isActivePreloader, setIsActivePreloader] = React.useState(false);
  const [isAnswerSearch, setIsAnswerSearch] = React.useState(false);
  const [isClickButtonSearch, setIsClickButtonSearch] = React.useState(false);

  const [infoTooltip, setInfoTooltip] = React.useState({
    title: '',
    src: '',
    isOpen: false,
  });


  const closePopup = () => {
    setInfoTooltip({
      ...infoTooltip,
      isOpen: false,
    });
  }

  React.useEffect(() => {
    handleGetSaveMovies();
  },[]);

  const handleGetSaveMovies = () => {
    api_main
    .getAllMovies()
    .then((arraySaveMovies) => {
      setSaveMovies(arraySaveMovies);
    })
  }

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: '',
    password: '',
    email: ''
  })

  const history = useHistory();

  const handleIsClickButtonSearch =() => {
    setIsClickButtonSearch(true);
  }

  const handleIsAnswerSearch = (sortMovies) => {
    console.log(sortMovies);
    if(sortMovies.length === 0){
      setIsAnswerSearch(true);
    }
    else{
      setIsAnswerSearch(false);
    }
  }
  

  const handleSortMovies = (arrayMovie, nameMovie, checked) => {
    setIsActivePreloader(true);
    const sortedArrayMovies = arrayMovie.filter(itemMovie => itemMovie.nameRU.toString().toLowerCase().includes(nameMovie.toString().toLowerCase()));
    if(checked) {
      const shortFilms = sortedArrayMovies.filter(itemMovie => itemMovie.duration < 41);
      setSortedMovies(shortFilms);
    } else {
      setSortedMovies(sortedArrayMovies);
    }
    setIsActivePreloader(false);
    handleIsAnswerSearch(sortedArrayMovies);
  };

  const handleSortSaveMovies = (arrayMovie, nameMovie, checked) => {
    setIsActivePreloader(true);
    const sortedArraySaveMovies = arrayMovie.filter(itemMovie => itemMovie.nameRU.toString().toLowerCase().includes(nameMovie.toString().toLowerCase()));
    if(checked) {
      const shortFilms = sortedArraySaveMovies.filter(itemMovie => itemMovie.duration < 41);
      setSortedArraySaveMovies(shortFilms);
    } else {
      setSortedArraySaveMovies(sortedArraySaveMovies);
    } 
    setIsActivePreloader(false);
    handleIsAnswerSearch(sortedArraySaveMovies);
  };

  const handleIsActivePreloader = () => {
    setIsActivePreloader(!isActivePreloader);
  }

  React.useEffect(() => {
    if(loggedIn){
      Promise.all([ api_movies.getAllMovies(), api_main.getAllMovies()])
      .then(([allMovies, allSavedMovies]) => {
        const arrayMovies = handleCompareArraysMovies(allMovies, allSavedMovies);
        const transformedArrayMovies = arrayMovies.map((item) => {
          return ({
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            movieId: item.id,
            nameRU: item.nameRU,
            nameEN: item.nameEN,
            isLike: item.isLike,
            image: `https://api.nomoreparties.co${item.image.url}`,
            trailer: item.trailerLink,
            thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
          });
        });
        setMovies(transformedArrayMovies);
        setSortedArraySaveMovies(allSavedMovies);
      })
      .catch(err => console.log(err));
    }
  },[loggedIn, saveMovies]);

  React.useEffect(() => {
    tokenCheck();
    if(loggedIn){
      api_main.getUserInfo()
      .then(({name, email}) => {
        setUserData({ name, email });
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[loggedIn]);

  const handleLogin = ({ password, email }) => {
    return moviesAuth.authorization({ password, email })
    .then((data) => {
      handleInfoTooltip("Вы успешно автризовались!", pathRegComp, true);
      localStorage.setItem('token', data.jwt);
      setLoggedIn(true);
      setTimeout(() => {
        history.push('/movies');
      }, 3000);
    })
    .catch(err => {
      console.log(err);
      handleInfoTooltip("Что-то пошло не так! Попробуйте ещё раз.", pathRegFail, true);
    })
  }

  const handleRegister = ({ name, email, password }) => {
    return moviesAuth.register({ name, email, password })
    .then(() => {
      handleInfoTooltip("Вы успешно зарегестрировались!", pathRegComp, true);
      setTimeout(() => {
        history.push('/signin');
      },3000)
    })
    .catch(err => {
      console.log(err);
      handleInfoTooltip("Что-то пошло не так! Попробуйте ещё раз.", pathRegFail, true);
    })
  } 

  function tokenCheck() { 
    if(localStorage.getItem('token')) { 
      api_main
      .getUserInfo()
      .then(({name, email}) => {
        setUserData({ name, email });
        setLoggedIn(true);
        history.push('/movies'); 
      })
      .catch(err => console.log(err)); 
    } 
  }

  const handleUpdateUserProfile = ({email, name}) => {
    return api_main.updateUserProfile({email, name})
    .then((userData) => {
      setUserData(userData);
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
  }

  const handleAddSaveMovies = (movie) => {
    api_main
     .createMovies(movie)
     .then((newSaveMovie) => {
       setSaveMovies([...saveMovies, newSaveMovie]);
       console.log('Фильм добавлен');
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
  }
  
  const handleDeleteSaveMovies = (movie) => {
    api_main
    .deleteMovieById(movie.movieId)
    .then(() => {
      setSaveMovies((state) => {
        return state.filter((item) => {
          return (item.movieId !== movie.movieId);
        })
      })
      setSortedMovies((state) => {
        return state.map((item) => 
          item.movieId === movie.movieId 
          ? { ...item, isLike: false }
          : item
        )
      })
      console.log('Фильм удалён');
     })
     .catch((err) => {
      console.log(`Ошибка ${err}`);
    })
  }

  const handleSaveMovie = (movie) => {
    saveMovies.forEach((item) => {
      if(item.movieId === movie.movieId){
        movie.isLike = true;
      }
    });
    if(movie.isLike){
      handleDeleteSaveMovies(movie);
      movie.isLike = false;
    } else {
      handleAddSaveMovies(movie);
      movie.isLike = true;
    }
  }

  const handleInfoTooltip = (title, src, isOpen) => {
    setInfoTooltip({ title, src, isOpen });
  }

  return (
    <CurrentUser.Provider value={userData}>

      <Switch>

        <ProtectedRoute path="/movies"
          component={Movies}
          sortedMovies={sortedMovies}
          loggedIn = {loggedIn}
          movies={movies}
          saveMovies={saveMovies}
          isAnswerSearch={isAnswerSearch}
          isActivePreloader={isActivePreloader}
          onIsClickButtonSearch={handleIsClickButtonSearch}
          onIsAnswerSearch={handleIsAnswerSearch}
          onIsActivePreloader={handleIsActivePreloader}
          onSortMovies={handleSortMovies}
          onSaveMovie={handleSaveMovie}
        />

        <ProtectedRoute path="/saved-movies"
          saveMovies={saveMovies}
          sortedSaveMovies={sortedSaveMovies}
          component={SavedMovies}
          loggedIn = {loggedIn}
          movies={movies}
          onSortMovies={handleSortSaveMovies}
          onSaveMovie={handleSaveMovie}
          onIsActivePreloader={handleIsActivePreloader}
          onIsAnswerSearch={handleIsAnswerSearch}
          onIsClickButtonSearch={handleIsClickButtonSearch}
        /> 

        <ProtectedRoute path="/profile"
          setUserData={setUserData}
          onUpdateUser = {handleUpdateUserProfile}
          setLoggedIn = {setLoggedIn}
          userData = {userData}
          loggedIn = {loggedIn}
          component={Profile}
        />

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/signin">
          <Login 
            userData = {userData}
            onLogin = {handleLogin}
            setUserData = {setUserData}
          />
        </Route>

        <Route path="/signup">
          <Register 
            userData = {userData}
            onRegister = {handleRegister}
            setUserData = {setUserData}
          />
        </Route>
 
        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>

    </CurrentUser.Provider>
  );
}

export default withRouter(App);

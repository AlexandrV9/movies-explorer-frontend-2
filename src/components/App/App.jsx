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
  const [isAnswerSearchSaveMovies, setIsAnswerSearchSaveMovies] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: '',
    password: '',
    email: ''
  })

  const [popupUpdateProfile, setPopupUpdateProfile] = React.useState(false);
  const [infoTooltip, setInfoTooltip] = React.useState({
    title: '',
    src: '',
    isOpen: false,
  });

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  
  const closePopup = () => {
    setPopupUpdateProfile(false);
    setInfoTooltip({
      ...infoTooltip,
      isOpen: false,
    });
  }

  const [checkedSort, setCheckedSort] = React.useState(false);
  const [checkedSave, setCheckedSave] = React.useState(false);

  const handlePopupUpdateProfile = (event) => {
    event.preventDefault();
    setPopupUpdateProfile(!popupUpdateProfile);
  }

  React.useEffect(() => {
    if((JSON.parse(localStorage.getItem("foundSortFilms"))) !== null && (JSON.parse(localStorage.getItem("foundSortFilms"))).length !== 0){
      let numberShortFilms = 0;
      const currentLocalStprage = JSON.parse(localStorage.getItem("foundSortFilms"));
      currentLocalStprage.forEach((item) => {
        if(item.duration < 41){
          numberShortFilms ++;
        }
      });  
      if(currentLocalStprage.length === numberShortFilms ){
        setCheckedSort(true);
      }
      setSortedMovies(currentLocalStprage);
    }
    localStorage.removeItem('foundSortFilms');
    handleGetSaveMovies();
    
  },[loggedIn]);

  const handleGetSaveMovies = () => {
    api_main
    .getAllMovies()
    .then((arraySaveMovies) => {
      setSaveMovies(arraySaveMovies);
      setSortedArraySaveMovies(arraySaveMovies);
    })
  }

  const history = useHistory();

  const handleShowShortFilms = (checked, nameMovie) => {
    if(!checked) {
      setSortedMovies(sortedMovies.filter(itemMovie => itemMovie.duration < 41));
      setCheckedSort(true);
    } else {
      setSortedMovies(movies.filter(itemMovie => itemMovie.nameRU.toString().toLowerCase().includes(nameMovie.toString().toLowerCase())));
      setCheckedSort(false);
    }
  }

  const handleShowShortSaveFilms = (checked, nameMovie) => {
    if(!checked) {
      setSortedArraySaveMovies(sortedSaveMovies.filter(itemMovie => itemMovie.duration < 41));
    } else {
      setSortedArraySaveMovies(saveMovies.filter(itemMovie => itemMovie.nameRU.toString().toLowerCase().includes(nameMovie.toString().toLowerCase())));
    }
  }

  const handleSortMovies = (arrayMovie, nameMovie, checked) => {
    localStorage.removeItem('foundSortFilms');
    setIsActivePreloader(true);
    setTimeout(() => {
      setIsActivePreloader(false);
      const sortedArrayMovies = arrayMovie.filter(itemMovie => itemMovie.nameRU.toString().toLowerCase().includes(nameMovie.toString().toLowerCase()));
    if(checked) {
      const shortFilms = sortedArrayMovies.filter(itemMovie => itemMovie.duration < 41);
      if(shortFilms.length === 0) {
        setIsAnswerSearch(true);
      } else {
        setIsAnswerSearch(false);
      }
      localStorage.setItem('foundSortFilms', JSON.stringify(shortFilms));
      setSortedMovies(shortFilms);
    } else {
      if(sortedArrayMovies.length === 0) {
        setIsAnswerSearch(true);
      } else {
        setIsAnswerSearch(false);
      }
      setSortedMovies(sortedArrayMovies);
      localStorage.setItem('foundSortFilms', JSON.stringify(sortedArrayMovies));
    }
    }, 300);
    
  };

  const handleSortSaveMovies = (arrayMovie, nameMovie, checked) => {
    localStorage.removeItem('foundSortSaveFilms');
    setIsActivePreloader(true);
    setTimeout(() => {
      const sortedArraySaveMovies = saveMovies.filter(itemMovie => itemMovie.nameRU.toString().toLowerCase().includes(nameMovie.toString().toLowerCase()));
    if(checked) {
      const shortFilms = sortedArraySaveMovies.filter(itemMovie => itemMovie.duration < 41);
      if(shortFilms.length === 0) {
        setIsAnswerSearchSaveMovies(true);
      } else {
        setIsAnswerSearchSaveMovies(false);
      }
      localStorage.setItem('foundSortSaveFilms', JSON.stringify(shortFilms));
      setSortedArraySaveMovies(shortFilms);
    } else {
      if(sortedArraySaveMovies.length === 0) {
        setIsAnswerSearchSaveMovies(true);
      } else {
        setIsAnswerSearchSaveMovies(false);
      }
      setSortedArraySaveMovies(sortedArraySaveMovies);
      localStorage.setItem('foundSortSaveFilms', JSON.stringify(sortedArraySaveMovies));
    } 
    setIsActivePreloader(false);
    },  300);
    
    
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
            _id: item._id,
            image: `https://api.nomoreparties.co${item.image.url}`,
            trailer: item.trailerLink,
            thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
          });
        });
        setMovies(transformedArrayMovies);
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
  },[loggedIn]);

  const handleLogin = ({ password, email }) => {
    return moviesAuth.authorization({ password, email })
    .then((data) => {
      handleInfoTooltip("Вы успешно автризовались!", pathRegComp, true);
      localStorage.setItem('token', data.jwt);
      setTimeout(() => {
        setLoggedIn(true);
        history.push('/movies');
        closePopup();
      }, 1000);
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
        // history.push('/movies'); 
      })
      .catch(err => console.log(err)); 
    } 
  }

  const handleUpdateUserProfile = ({email, name}) => {
    return api_main.updateUserProfile({email, name})
    .then((userData) => {
      handleInfoTooltip("Данные пользователя успешно обновлены!", pathRegComp, true);
      setUserData(userData);
      setPopupUpdateProfile(false);
    })
    .catch((err) => {
      console.log(`Ошибка ${err}`);
      handleInfoTooltip("Что-то пошло не так! Попробуйте ещё раз.", pathRegFail, true);
    })
  }

  const handleAddSaveMovies = (movie) => {
    const currentLocalStprage = JSON.parse(localStorage.getItem('foundSortFilms'));
    api_main
     .createMovies(movie)
     .then((newSaveMovie) => {
       movie.isLike = true;
       currentLocalStprage.push(newSaveMovie);
       setSaveMovies([...saveMovies, newSaveMovie]);
       setSortedArraySaveMovies([...sortedSaveMovies, newSaveMovie]);
       setSortedMovies((state) => {
        return state.map((item) => {
          if(item.movieId === newSaveMovie.movieId){
            return {...item, _id: newSaveMovie._id}
          } else {
            return item;
          }
        })
      });
      localStorage.setItem('foundSortFilms', JSON.stringify(currentLocalStprage));
       console.log('Фильм добавлен');
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      })
  }

  React.useEffect(() => {
    localStorage.setItem('foundSortFilms', JSON.stringify(sortedMovies));
  },[handleAddSaveMovies]);

  const handleDeleteSaveMovies = (movie) => {
    api_main
    .deleteMovieById(movie._id)
    .then(() => {
      movie.isLike = false;
      setSaveMovies((state) => {
        return state.filter((item) => {
          return (item._id !== movie._id);
        })
      })
      setSortedArraySaveMovies((state) => {
        return state.filter((item) => 
          item.movieId !== movie.movieId 
          
        )
      })
      setSortedMovies((state) => {
        return state.map((item) => 
          item.movieId === movie.movieId 
          ? { 

            country: item.country,
            description: item.description,
            director: item.director,
            duration: item.duration,
            image: item.image,
            movieId: item.movieId,
            nameEN: item.nameEN,
            nameRU: item.nameRU,
            thumbnail: item.thumbnail,
            trailer: item.trailer,
            year: item.year,
            isLike: false 
          }
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
    } else {
      handleAddSaveMovies(movie);
    }
  }

  const handleInfoTooltip = (title, src, isOpen) => {
    setInfoTooltip({ title, src, isOpen });
  }


  const handleButtonLogOff = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('foundSortFilms');
    localStorage.removeItem('foundSortSaveFilms');
    setLoggedIn(false);
    setMovies([]);
    setSaveMovies([]);
    setSortedMovies([]); 
    setSortedArraySaveMovies([]);
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
          onIsActivePreloader={handleIsActivePreloader}
          onSortMovies={handleSortMovies}
          onSaveMovie={handleSaveMovie}
          handleShowShortFilms={handleShowShortFilms}
          checkedSort={checkedSort}
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
          isActivePreloader={isActivePreloader}
          isAnswerSearchSaveMovies={isAnswerSearchSaveMovies}
          handleShowShortSaveFilms={handleShowShortSaveFilms}
          checkedSave={checkedSave}
        /> 

        <ProtectedRoute path="/profile"
          setName={setName}
          setEmail={setEmail}
          name={name}
          email={email}
          setUserData={setUserData}
          onUpdateUser = {handleUpdateUserProfile}
          setLoggedIn = {setLoggedIn}
          userData = {userData}
          loggedIn = {loggedIn}
          component={Profile}
          handlePopupUpdateProfile={handlePopupUpdateProfile}
          handleButtonLogOff={handleButtonLogOff}
        />

        <Route exact path="/">
          <Main 
            loggedIn={loggedIn}
          />
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

      <InfoTooltip 
        { ...infoTooltip }
        onClose={ closePopup }
      />

    </CurrentUser.Provider>
  );
}

export default withRouter(App);

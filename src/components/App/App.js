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
import * as moviesAuth from '../../utils/MoviesAuth';

import { api_main } from '../../utils/MainApi';
import { api_movies } from '../../utils/MoviesApi';

import './App.css';
import React from 'react';
import { withRouter } from 'react-router-dom';

function App() {

  const [movies, setMovies] = React.useState([]);
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: '',
    password: '',
    email: ''
  })

  const history = useHistory();

  const deleteButtonSaveMoviesClick = (movie) => {
    setSaveMovies(saveMovies.filter((item) => item.id !== movie.id));
  }

  const handleButtonSaveMoviesClick = (movie) => {
    setSaveMovies([...saveMovies, movie]);
    localStorage.setItem('listSaveMovies', JSON.stringify(saveMovies));
  };

  React.useEffect(() => {
    setSaveMovies(JSON.parse(localStorage.getItem('listSaveMovies')));
  },[]);

  const handleSortMovies = (arrayMovie, nameMovie) => {
    setSortedMovies(
      arrayMovie.filter(itemMovie => itemMovie.nameRU.toString().toLowerCase().includes(nameMovie.toString().toLowerCase()))
    );
  };

  React.useEffect(() => {
    tokenCheck();
  },[loggedIn]);

  React.useEffect(() => {
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
      localStorage.setItem('token', data.jwt);
      setLoggedIn(true);
      history.push('/movies');
    })
    .catch(err => {
      console.log(err);
    })
  }

  const handleRegister = ({ name, email, password }) => {
    return moviesAuth.register({ name, email, password })
    .then((data) => {
      console.log(data);
      setTimeout(() => {
        history.push('/signin');
      }, 3000);
    })
    .catch(err => {
      console.log(err);
    })
  } 

  React.useEffect(() => {
     api_movies
      .getAllMovies()
      .then((arrayMovies) => {
         setMovies(arrayMovies);
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }, []);

  // console.log(movies);

  function tokenCheck() { 
    if(localStorage.getItem('token')) { 
      // let token = localStorage.getItem('token');
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


  return (
    <CurrentUser.Provider value={userData}>

      <Switch>

        <ProtectedRoute path="/movies"
          handleButtonSaveMoviesClick={handleButtonSaveMoviesClick}
          saveMovies = {saveMovies}
          setSaveMovies={setSaveMovies}
          loggedIn = {loggedIn}
          movies={movies}
          sortedMovies={sortedMovies}
          onSortMovies={handleSortMovies}
          component={Movies}
        />

        <ProtectedRoute path="/saved-movies"
          deleteButtonSaveMoviesClick={deleteButtonSaveMoviesClick}
          saveMovies = {saveMovies}
          setSaveMovies={setSaveMovies}
          loggedIn = {loggedIn}
          movies={movies}
          component={SavedMovies}
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

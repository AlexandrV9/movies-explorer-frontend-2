import Header from '../ReusedBlocks/Header/Header';
import Promo from '../components-main/Promo/Promo';
import AboutProject from '../components-main/AboutProject/AboutProject';
import React from 'react';
import Techs from '../components-main/Techs/Techs';
import AboutMe from '../components-main/AboutMe/AboutMe';
import Footer from '../ReusedBlocks/Footer/Footer';
import LogOrCreatIntoAccount from '../components-main/LogOrCreatIntoAccount/LogOrCreatIntoAccount';
import Navigation from '../ReusedBlocks/Navigation/Navigation';

function Main({
  loggedIn,
}) {
  return (
    <> 
      <Header>
        { loggedIn ?
          <Navigation/> 
          :
          <LogOrCreatIntoAccount />
        }
      </Header>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Main;

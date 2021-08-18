import Header from '../ReusedBlocks/Header/Header';
import Promo from '../components-main/Promo/Promo';
import AboutProject from '../components-main/AboutProject/AboutProject';
import Techs from '../components-main/Techs/Techs';
import AboutMe from '../components-main/AboutMe/AboutMe';
import Footer from '../ReusedBlocks/Footer/Footer';
import LogOrCreatIntoAccount from '../components-main/LogOrCreatIntoAccount/LogOrCreatIntoAccount';

function Main() {
  return (
    <>
      <Header>
        <LogOrCreatIntoAccount />
      </Header>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
      {/* <Movies /> */}
      {/* <SavedMovies /> */}
    </>
  );
}

export default Main;

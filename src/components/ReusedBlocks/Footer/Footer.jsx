import React from 'react';
import './Footer.css';

function Footer(){
  return (
    <footer className="footer">
      <p className="footer__signature">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__content-wrapper">
        <nav>
          <ul className="footer__unordered-list">
            <li className="footer__item-list"><a href="#d" className="footer__item-link" target="_blank">Яндекс.Практикум</a></li>
            <li className="footer__item-list"><a href="@d" className="footer__item-link" target="_blank">Github</a></li>
            <li className="footer__item-list"><a href="#df" className="footer__item-link" target="_blank">Facebook</a></li>
          </ul>
        </nav>
      <p className="footer__copyright">&copy;2021</p>
      </div>
    </footer>
  );
}

export default Footer;
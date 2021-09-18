import React from 'react';
import './PageNotFound.css';
import { useHistory } from 'react-router';

function PageNotFound () {
  const history = useHistory();

  const handleBackOnPage = () => {
    history.goBack();
  }

  return (
    <section className="page-not-found">
      <h1 className="page-not-found__error-code">404</h1>
      <p className="page-not-found__signature">Страница не найдена</p>
      <button className="page-not-found__come-back-link" onClick={handleBackOnPage}>Назад</button>
    </section>
  );
}

export default PageNotFound;
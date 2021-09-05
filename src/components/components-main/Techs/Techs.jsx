import React from 'react';
import './Techs.css';
import BlockName from '../../ReusedBlocks/BlockName/BlockName';

function Techs(props) {
  return (
    
    <section className="technologies" id="tech">
      <div className="content-wrapper">
        <div className="technologies__content">
          <BlockName name="Технологии"/>
          <h2 className="technologies__title">7 технологий</h2>
          <p className="technologies__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="technologies__unordered-list">
            <li className="technologies__item-list">
              <p className="technologies__title-item">HTML</p>
            </li>
            <li className="technologies__item-list">
              <p className="technologies__title-item">CSS</p>
            </li>
            <li className="technologies__item-list">
              <p className="technologies__title-item">JS</p>
            </li>
            <li className="technologies__item-list">
              <p className="technologies__title-item">React</p>
            </li>
            <li className="technologies__item-list">
              <p className="technologies__title-item">Git</p>
            </li>
            <li className="technologies__item-list">
              <p className="technologies__title-item">Express.js</p>
            </li>
            <li className="technologies__item-list">
              <p className="technologies__title-item">mongoDB</p>
            </li>
          </ul>
        </div>
        
      </div>
      
    </section>
  );
}

export default Techs;
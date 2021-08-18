import './Techs.css';

import BlockName from '../../ReusedBlocks/BlockName/BlockName';

function Techs(props) {
  return (
    
    <section class="technologies" id="tech">
      <div class="content-wrapper">
        <div className="technologies__content">
          <BlockName name="Технологии"/>
          <h2 class="technologies__title">7 технологий</h2>
          <p class="technologies__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul class="technologies__unordered-list">
            <li class="technologies__item-list">
              <p class="technologies__title-item">HTML</p>
            </li>
            <li class="technologies__item-list">
              <p class="technologies__title-item">CSS</p>
            </li>
            <li class="technologies__item-list">
              <p class="technologies__title-item">JS</p>
            </li>
            <li class="technologies__item-list">
              <p class="technologies__title-item">React</p>
            </li>
            <li class="technologies__item-list">
              <p class="technologies__title-item">Git</p>
            </li>
            <li class="technologies__item-list">
              <p class="technologies__title-item">Express.js</p>
            </li>
            <li class="technologies__item-list">
              <p class="technologies__title-item">mongoDB</p>
            </li>
          </ul>
        </div>
        
      </div>
      
    </section>
  );
}

export default Techs;
import BlockName from '../../ReusedBlocks/BlockName/BlockName';
import './AboutProject.css';

function AboutTheProject(){
  return (
    <section class="about-the-project"id="project">
      <div className="content-wrapper">
        <BlockName name="О проекте"/>
        <div class="about-the-project__content-box">
          <div class="about-the-project__left-column-text column-text">
            <h3 class="left-column-text__title column-text__title">Дипломный проект включал 5 этапов</h3>
            <p class="left-column-text__paragraph column-text__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div class="about-the-project__right-column-text column-text">
            <h3 class="right-column-text__title column-text__title">На выполнение диплома ушло 5 недель</h3>
            <p class="right-column-text__paragraph column-text__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div class="about-the-project__durationDiplomaProject">
          <table class="about-the-project__table">
            <tr>
              <th class="about-the-project__table-first-column-title">1 неделя</th>
              <th class="about-the-project__table-second-column-title">4 недели</th>
            </tr>
            <td class="about-the-project__table-simple-text">Back-end</td>
            <td class="about-the-project__table-simple-text">Front-end</td>
          </table>
        </div>
      </div>
      
    </section>
  );
}

export default AboutTheProject;
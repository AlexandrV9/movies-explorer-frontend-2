import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import cardPath from '../../../images/1.jpg';

function MoviesCardList ({ pathIconNotesInactive, pathIconNotesActive, children }) {
  return (
    <section className="movies-card-list">
        <ul className="movies-card-list__unordered-list">

        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/>
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/>
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/>
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/>
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} pathIconNotesInactive={pathIconNotesInactive} pathIconNotesActive={pathIconNotesActive}/>
        {/* <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} /> */}
        {/* <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} />
        <MoviesCard name="33 слова о дизайне" duration="1ч 47м" linkMovie={cardPath} /> */}

      </ul>
      {children}
    </section>
  );
}

export default MoviesCardList;
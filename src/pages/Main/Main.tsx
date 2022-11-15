import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";

import styles from './Main.module.css';
import {FilmCard, LoadingSpinner} from "../../components";
import {
  getFilmsTC,
  getShowMoreFilmsTC, resetPageNumberAC,
  resetSearchTermAC
} from "../../store/actions";
import {filmsSelector, loadingSelector, searchTermSelector} from "../../store/selectors";
import {Film} from "../../types";
import {useAppDispatch} from "../../store";


export const Main = () => {

  const dispatch = useAppDispatch();
  const filmList = useSelector(filmsSelector);
  const searchTerm = useSelector(searchTermSelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    filmList.length === 0 && dispatch(getFilmsTC());

    return () => {
      dispatch(resetSearchTermAC());
      //dispatch(resetPageNumberAC());
    }
  }, []);


  const showMoreFilms = () => {
    dispatch(getShowMoreFilmsTC())
  }

  const filteredFilms = filmList.filter(film => {
    return film.Title.toLowerCase().includes(searchTerm.toLowerCase());
  })

  const films = useMemo(() => {
    return filteredFilms.map((film: Film) =>
      <FilmCard film={film} key={film.imdbID}/>
    );
  }, [filteredFilms]);

  return (
    <main className={styles.wrapper}>
      <div className={styles.containerFilmCards}>
        {films}
      </div>
      {!loading
        ? ''
        : <div className={styles.loadingSpinner}>
          <LoadingSpinner />
        </div>
      }
      {films.length === 0
        ? ''
        : <button className={styles.button_showMore} onClick={() => showMoreFilms()}>Show more</button>
      }
    </main>
  );
};
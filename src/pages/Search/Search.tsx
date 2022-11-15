import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";

import styles from './Search.module.css';
import {useAppDispatch} from "../../store";
import {Film} from "../../types";
import {FilmCard, LoadingSpinner} from "../../components";
import {
  getFilteredFilmsTC,
  getShowMoreFilteredFilmsTC,
  resetFilmsDataAC,
  resetPageNumberAC,
  resetSearchTermAC
} from "../../store/actions";
import {loadingSelector, searchedFilmsSelector, searchTermSelector} from "../../store/selectors";


export const Search = () => {

  const dispatch = useAppDispatch();
  const searchTerm = useSelector(searchTermSelector);
  const filmList = useSelector(searchedFilmsSelector);
  const loading = useSelector(loadingSelector);


  useEffect(() => {
    return () => {
      dispatch(resetSearchTermAC());
      dispatch(resetPageNumberAC());
    }
  }, [])

  useEffect(() => {
    dispatch(resetPageNumberAC());
    dispatch(resetFilmsDataAC());
    dispatch(getFilteredFilmsTC());
  }, [searchTerm]);

  const showMoreFilms = () => {
    dispatch(getShowMoreFilteredFilmsTC());
  }

  const films = useMemo(() => {
    return filmList.map((film: Film) =>
      <FilmCard film={film} key={film.imdbID}/>
    );
  }, [filmList]);

  return (
    <div className={styles.wrapper}>
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
    </div>
  );
};
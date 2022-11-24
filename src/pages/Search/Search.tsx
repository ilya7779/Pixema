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
  resetSearchTermAC, setFilterSearchAC, setSearchTermAC
} from "../../store/actions";
import {
  filterSearchSelector, filterSelector,
  loadingSelector,
  searchedFilmsSelector,
  searchTermSelector, searchYearFromSelector, searchYearToSelector,
  sortByYearSelector
} from "../../store/selectors";


export const Search = () => {

  const dispatch = useAppDispatch();
  const searchTerm = useSelector(searchTermSelector);
  const filmList = useSelector(searchedFilmsSelector);
  const loading = useSelector(loadingSelector)
  const sortByYear = useSelector(sortByYearSelector);
  const filterSearch = useSelector(filterSearchSelector);
  const searchYearFrom = useSelector(searchYearFromSelector);
  const searchYearTo = useSelector(searchYearToSelector);
  const filterActive = useSelector(filterSelector);



  useEffect(() => {
    dispatch(setSearchTermAC(filterSearch));
    return () => {
      dispatch(resetSearchTermAC());
      dispatch(resetPageNumberAC());
      dispatch(setFilterSearchAC(''));
    }
  }, [])

  useEffect(() => {
    dispatch(resetPageNumberAC());
    dispatch(resetFilmsDataAC());
    dispatch(getFilteredFilmsTC());
  }, [searchTerm, filterActive]);

  const showMoreFilms = () => {
    dispatch(getShowMoreFilteredFilmsTC());
  }

  // const sortFilms = useMemo(() => {
  //   let sortedFilmList = [...filmList];
  //     return sortedFilmList
  //
  //       .sort((a, b) => a.Year < b.Year ? 1 : -1)
  //       .map((film: Film) =>
  //       <FilmCard film={film} key={film.imdbID}/>
  //     );
  // }, [filmList]);

  const sortFilms = useMemo(() => {
    let sortedFilmList = [...filmList];
    if (sortByYear && (searchYearFrom.length > 0 || searchYearTo.length > 0)) {
      return sortedFilmList.sort((a, b) => a.Year < b.Year ? 1 : -1)
        .filter((film: Film) => film.Year > Number(searchYearFrom))
        .filter((film: Film) => film.Year < Number(searchYearTo))
        .map((film: Film) =>
          <FilmCard film={film} key={film.imdbID}/>
        );
    }
    else if (searchYearFrom.length > 0 || searchYearTo.length > 0) {
      return sortedFilmList.filter((film: Film) => film.Year > Number(searchYearFrom))
        .filter((film: Film) => film.Year < Number(searchYearTo))
        .map((film: Film) =>
          <FilmCard film={film} key={film.imdbID}/>
        );
    }
    else if (sortByYear) {
      return sortedFilmList.sort((a, b) => a.Year < b.Year ? 1 : -1)
        .map((film: Film) =>
          <FilmCard film={film} key={film.imdbID}/>
        );
    }
    else {
      return sortedFilmList.map((film: Film) =>
        <FilmCard film={film} key={film.imdbID}/>
      );
    }

  }, [filmList]);

  // const films = useMemo(() => {
  //   return filmList.map((film: Film) =>
  //     <FilmCard film={film} key={film.imdbID}/>
  //   );
  // }, [filmList]);

  // const setFilms = sortByYear ? sortFilms : films;

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerFilmCards}>
        {sortFilms}
      </div>
      {!loading
        ? ''
        : <div className={styles.loadingSpinner}>
          <LoadingSpinner/>
        </div>
      }
      {sortFilms.length === 0
        ? ''
        : <button className={styles.button_showMore} onClick={() => showMoreFilms()}>Show more</button>
      }
    </div>
  );
};
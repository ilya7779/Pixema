import React, {useEffect, useMemo} from "react";
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
  resetSearchTermAC, setSearchTermAC
} from "../../store/actions";
import {
  filterSelector, hasFilterSelector,
  loadingSelector,
  searchedFilmsSelector,
  searchTermSelector,
} from "../../store/selectors";



export const Search = () => {

  const dispatch = useAppDispatch();
  const searchTerm = useSelector(searchTermSelector);
  const filmList = useSelector(searchedFilmsSelector);
  const loading = useSelector(loadingSelector)
  const filter = useSelector(filterSelector);
  const filterActive = useSelector(hasFilterSelector);

  useEffect(() => {
    return () => {
      dispatch(resetSearchTermAC());
      dispatch(resetPageNumberAC());
      dispatch(setSearchTermAC(''));
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

  const sortFilms = useMemo(() => {
    let sortedFilmList = [...filmList];

    if (filter?.hasSortByYear && (filter?.searchYearFrom.length > 0 || filter?.searchYearTo.length > 0)) {
      return sortedFilmList.sort((a, b) => a.Year < b.Year ? 1 : -1)
        .filter((film: Film) => film.Year > Number(filter?.searchYearFrom))
        .filter((film: Film) => film.Year < Number(filter?.searchYearTo))
        .map((film: Film) =>
          <FilmCard film={film} key={film.imdbID}/>
        );
    }
    else if (filter?.searchYearFrom && filter?.searchYearFrom.length > 0
      || filter?.searchYearTo && filter?.searchYearTo.length > 0) {
      return sortedFilmList
        .filter((film: Film) => film.Year > Number(filter?.searchYearFrom))
        .filter((film: Film) =>
          film.Year < (Number(filter?.searchYearTo) > 0 ? Number(filter?.searchYearTo) : 9999))
        .map((film: Film) =>
          <FilmCard film={film} key={film.imdbID}/>
        );
    }
    else if (filter?.hasSortByYear) {
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

  console.log(searchTerm);
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerFilmCards}>
        {searchTerm.length < 3
          ? 'Enter at least 3 letters in the search'
          : sortFilms.length !== 0 ? sortFilms : 'No results'}
      </div>
      {!loading
        ? ''
        : <div className={styles.loadingSpinner}>
          <LoadingSpinner/>
        </div>
      }
      {sortFilms.length === 0
        ? ''
        : <button className={styles.button_showMore} disabled={loading && true} onClick={() => showMoreFilms()}>Show more</button>
      }
    </div>
  );
};
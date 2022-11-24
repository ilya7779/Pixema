import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import styles from './Filter.module.css';
import {ChevronDown, Cross} from "../../assets";
import {
  filterSearchSelector,
  filterSelector, searchedFilmsSelector,
  searchYearFromSelector,
  searchYearToSelector
} from "../../store/selectors";
import {
  getFilteredFilmsTC,
  resetFilmsDataAC,
  resetPageNumberAC,
  resetSearchTermAC,
  setActiveFilterAC,
  setFilterSearchAC, setSearchTermAC, setSearchYearFromAC, setSearchYearToAC,
  setSortByYearAC
} from "../../store/actions";
import {useAppDispatch} from "../../store";
import {useEffect, useState} from "react";


export const Filter = () => {
  const dispatch = useAppDispatch();
  const filmList = useSelector(searchedFilmsSelector);
  const filterActive = useSelector(filterSelector);
  const filterSearch = useSelector(filterSearchSelector);
  const searchYearFrom = useSelector(searchYearFromSelector);
  const searchYearTo = useSelector(searchYearToSelector);

  // useEffect(() => {
  //   return () => {
  //     dispatch(setFilterSearchAC(''));
  //   }
  // }, [filterActive]);

  const setActiveFilter = () => {
    dispatch(setActiveFilterAC());
  }
  const [sortButtonYear, setSortButtonYear] = useState(false);
  const [sortButtonRating, setSortButtonRating] = useState(false);
  const activeButtonYear = () => {
    setSortButtonRating(false);
    setSortButtonYear(!sortButtonYear);
  };
  const activeButtonRating = () => {
    setSortButtonYear(false);
    setSortButtonRating(!sortButtonRating);
  };
  const showResults = () => {
    dispatch(resetSearchTermAC());
    dispatch(resetPageNumberAC());
    dispatch(resetFilmsDataAC());
    dispatch(setSortByYearAC(sortButtonYear));
    dispatch(setActiveFilterAC());
    dispatch(setSearchTermAC(filterSearch));
  }
  // const setYearSort = () => {
  //   dispatch(setYearSortAC());
  // }
  const searchHandler = (event: any) => {
    dispatch(setFilterSearchAC(event.target.value));
  }
  const searchYearFromHandler = (event: any) => {
    dispatch(setSearchYearFromAC(event.target.value));
  }
  const searchYearToHandler = (event: any) => {
    dispatch(setSearchYearToAC(event.target.value));
  }

  return (
    <div className={filterActive ? styles.filter + ' ' + styles.active : styles.filter} onClick={setActiveFilter}>
      <div className={styles.filter__blackout}></div>
      <div className={styles.filter__container} onClick={e => e.stopPropagation()}>
        <div className={styles.filter__header}>
          <div className={styles.header__title}>Filters</div>
          <button className={styles.header__close} type="button" onClick={setActiveFilter}><Cross/></button>
        </div>
        <div className={styles.filter__title}>Sort by</div>
        <div className={styles.sortBy__buttons}>
          <button type="button" className={sortButtonRating
            ? styles.sortBy__button+ ' ' + styles.active
            : styles.sortBy__button}
                  onClick={activeButtonRating}>Rating</button>

          <button type="button" className={sortButtonYear
            ? styles.sortBy__button + ' ' + styles.active
            : styles.sortBy__button}
                  onClick={activeButtonYear}>Year</button>
        </div>
        <div className={styles.filter__title}>Full or short movie name</div>
        <input className={styles.filter_inputFilm}
               value={filterSearch}
               onChange={(event) => searchHandler(event)}
               type="text"
               placeholder="Your text"/>
        <div className={styles.filter__title}>Genre</div>
        <div className={styles.filter__genre}>
          <ul>
            <li>
              <div className={styles.filter__genreCurrent}>Adventure</div>
              <Cross/>
            </li>
            <li>
              <div className={styles.filter__genreCurrent}>Drama</div>
              <Cross/>
            </li>
            <li>
              <div className={styles.filter__genreCurrent}>Documentary</div>
              <Cross/>
            </li>
            <li>
              <div className={styles.filter__genreCurrent}>Thriller</div>
              <Cross/>
            </li>
            <input className={styles.filter__genreInput} type="text" placeholder="Select genre"/>
          </ul>
        </div>
        <div className={styles.filter__title}>Years</div>
        <div className={styles.filter__inputs}>
          <input className={styles.filter_input}
                 type="number"
                 placeholder="From"
                 value={searchYearFrom}
                 onChange={(event) => searchYearFromHandler(event)}
          />
          <input className={styles.filter_input}
                 type="number"
                 placeholder="To"
                 value={searchYearTo}
                 onChange={(event) => searchYearToHandler(event)}
          />
        </div>
        <div className={styles.filter__title}>Rating</div>
        <div className={styles.filter__inputs}>
          <input className={styles.filter_input} type="number" placeholder="From"/>
          <input className={styles.filter_input} type="number" placeholder="To"/>
        </div>
        <div className={styles.filter__title}>Country</div>
        <form className={styles.filter__countryForm}>
          <input className={styles.filter_inputCountry} type="text" placeholder="Select country"/>
          <div className={styles.input__chevronDown}><ChevronDown/></div>
        </form>
        <div className={styles.filter__buttons}>
          <button className={styles.buttons__button} type="button">Clear filter</button>
          <Link to='/search'>
            <button className={styles.buttons__button} type="button" onClick={showResults}>Show results</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import styles from './Filter.module.css';
import {ChevronDown, Cross} from "../../assets";
import {hasFilterSelector} from "../../store/selectors";
import {
  resetFilmsDataAC,
  resetPageNumberAC, resetSearchTermAC,
  setActiveFilterAC, setFilterAC,
} from "../../store/actions";
import {useAppDispatch} from "../../store";


export const Filter = () => {
  const dispatch = useAppDispatch();
  const filterActive = useSelector(hasFilterSelector);

  const setActiveFilter = () => {
    dispatch(setActiveFilterAC());
  }

  const [sortButtonYear, setSortButtonYear] = useState(false);
  const [sortButtonRating, setSortButtonRating] = useState(false);
  const [filterSearch, setFilterSearch] = useState('');
  const [searchYearFrom, setSearchYearFrom] = useState('');
  const [searchYearTo, setSearchYearTo] = useState('');
  const activeButtonYear = () => {
    setSortButtonRating(false);
    setSortButtonYear(!sortButtonYear);
  };
  const activeButtonRating = () => {
    setSortButtonYear(false);
    setSortButtonRating(!sortButtonRating);
  };
  const showResults = () => {
    dispatch(resetPageNumberAC());
    dispatch(resetFilmsDataAC());
    dispatch(setActiveFilterAC());
    dispatch(setFilterAC({hasSortByYear: sortButtonYear,
      filterSearch: filterSearch, searchYearFrom: searchYearFrom, searchYearTo: searchYearTo}));
  }
  const clearFilter = () => {
    setSortButtonYear(false);
    setSortButtonRating(false);
    setFilterSearch('');
    setSearchYearFrom('');
    setSearchYearTo('');
    dispatch(resetSearchTermAC());
    dispatch(resetFilmsDataAC());
    dispatch(setFilterAC({hasSortByYear: sortButtonYear,
      filterSearch: filterSearch, searchYearFrom: searchYearFrom, searchYearTo: searchYearTo}))
  }

    filterActive
      ? document.querySelector("body")!.setAttribute('style',"overflow: hidden")
      : document.querySelector("body")!.setAttribute('style', "overflow: visible");

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
               onChange={(event) => setFilterSearch(event.target.value)}
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
                 onChange={(event) => setSearchYearFrom(event.target.value)}
          />
          <input className={styles.filter_input}
                 type="number"
                 placeholder="To"
                 value={searchYearTo}
                 onChange={(event) => setSearchYearTo(event.target.value)}
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
          <button className={styles.buttons__button} type="button" onClick={clearFilter}>Clear filter</button>
          <Link to='/search'>
            <button className={styles.buttons__button} type="button" onClick={showResults}>Show results</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
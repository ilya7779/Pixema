import {ChangeEvent, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import styles from './Search.module.css';
import {useAppDispatch} from "../../store";
import {setActiveFilterAC, setSearchTermAC} from "../../store/actions";
import {useDebounce} from "../../hooks";
import {IconFilter} from "../../assets";
import {filterSelector} from "../../store/selectors";


export const Search = () => {
  const dispatch = useAppDispatch();
  const location = useLocation()

  const filterSearch = useSelector(filterSelector);
  const [searchValueTerm, setSearchValueTerm] = useState('');
  const isDisabling = location.pathname === '/settings';

  const makeDelay = useDebounce((searchValueTerm: string) => {
    dispatch(setSearchTermAC(searchValueTerm));
  }, 600);

  useEffect(() => {
    makeDelay(searchValueTerm);
  }, [searchValueTerm]);

  useEffect(() => {
    if (location.pathname === '/search') {
      setSearchTermAC(filterSearch?.filterSearch || '');
      setSearchValueTerm(filterSearch?.filterSearch || '');
    }

    return () => {
      setSearchTermAC("");
      setSearchValueTerm("");
    }
  }, [location.pathname, filterSearch]);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValueTerm(event.target.value);
  };

  const setActiveFilter = () => {
    dispatch(setActiveFilterAC());
  }

  return (
    <div>
      <div className={styles.form}>
        <form className={styles.search__form}>
          <input
            className={styles.search__input}
            placeholder='Search'
            type='text'
            disabled={isDisabling}
            value={searchValueTerm}
            onChange={(event) => searchHandler(event)}
          />
          <div className={styles.search__iconFilter}>
            <button className={styles.search__buttonFilter} type="button" onClick={setActiveFilter}><IconFilter /></button>
          </div>
        </form>
      </div>
    </div>
  );
}

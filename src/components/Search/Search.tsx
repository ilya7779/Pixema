import {useEffect, useState} from "react";

import styles from './Search.module.css';
import {useAppDispatch} from "../../store";
import {setActiveFilterAC, setSearchTermAC} from "../../store/actions";
import {useDebounce} from "../../hooks";
import {IconFilter} from "../../assets";


export const Search = () => {
  const [searchValueTerm, setSearchValueTerm] = useState('');
  const dispatch = useAppDispatch();

  const makeRequest = useDebounce((value: string) => {
    dispatch(setSearchTermAC(value));
  }, 600);

  useEffect(() => {
    makeRequest(searchValueTerm)
  }, [searchValueTerm]);


  const searchHandler = (event: any) => {
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

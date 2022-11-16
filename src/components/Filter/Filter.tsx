import {useSelector} from "react-redux";

import styles from './Filter.module.css';
import {ChevronDown, Cross} from "../../assets";
import {filterSelector} from "../../store/selectors";
import {setActiveFilterAC} from "../../store/actions";
import {useAppDispatch} from "../../store";


export const Filter = () => {
  const dispatch = useAppDispatch();
  const filterActive = useSelector(filterSelector);
  const setActiveFilter = () => {
    dispatch(setActiveFilterAC());
  }
  //active ? styles.filter + ' ' + styles.active : styles.filter
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
          <button className={styles.sortBy__button}>Rating</button>
          <button className={styles.sortBy__button}>Year</button>
        </div>
        <div className={styles.filter__title}>Full or short movie name</div>
        <input className={styles.filter_inputFilm} type="text" placeholder="Your text"/>
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
          <input className={styles.filter_input} type="number" placeholder="From"/>
          <input className={styles.filter_input} type="number" placeholder="To"/>
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
          <button className={styles.buttons__button} type="button">Show results</button>
        </div>
      </div>
    </div>
  )
}
import {useSelector} from "react-redux";
import {useState} from "react";

import styles from './Search.module.css';
import {useAppDispatch} from "../../store";
import {setActiveFilterAC, setSearchTermAC} from "../../store/actions";
import {searchTermSelector} from "../../store/selectors";
import {useDebounce} from "../../hooks";
import {IconFilter} from "../../assets";


// function useLatest(value) {
//   const valueRef = useRef(value);
//
//   useLayoutEffect(() => {
//     valueRef.current = value;
//   }, [value]);
//   return valueRef;
// }

// function useDebounce(cb, ms) {
//   const latestCb = useLatest(cb);
//   return useMemo(
//     () =>
//       debounce((...args) => {
//         latestCb.current(...args);
//       }, ms),
//     [ms, latestCb]
//   );
// }

export const Search = () => {
  const [searchValueTerm, setSearchValueTerm] = useState('');
  const dispatch = useAppDispatch();
  const searchTerm = useSelector(searchTermSelector);

  const makeRequest = useDebounce((value: string) => {
    dispatch(setSearchTermAC(value));
  }, 300);

  const searchHandler = (event: any) => {
    // setSearchValueTerm(event.target.value)
    makeRequest(event.target.value);
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
            value={searchTerm}
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

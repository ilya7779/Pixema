import {useSelector} from "react-redux";
import {useState} from "react";

import styles from './Search.module.css';
import {IconSearch} from '../../assets';
import {useAppDispatch} from "../../store";
import {setSearchTermAC} from "../../store/actions";
import {searchTermSelector} from "../../store/selectors";
import {useDebounce} from "../../hooks";


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
  // const searchTerm = useSelector(searchTermSelector);

  const makeRequest = useDebounce((value: string) => {
    dispatch(setSearchTermAC(value));
  }, 1000);

  const searchHandler = (event: any) => {
    setSearchValueTerm(event.target.value)
    makeRequest(event.target.value);
  };
  //
  // const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   dispatch(setSearchTermAC(event.target.value));
  // };

  // const t = useCallback((s) => debounce((s) => {
  //   dispatch(setSearchTermAC(s))
  // }, 1000), []);
  //
  // useEffect(() => {
  //   t(searchValueTerm)
  // }, [searchValueTerm])

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
          <div className={styles.search__iconSearch}>
            <IconSearch/>
          </div>
        </form>
      </div>
    </div>
  );
};

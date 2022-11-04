import styles from './Search.module.css';
import { IconSearch } from '../../assets';

export const Search = () => {

  return (
    <div>
      <div className={styles.form}>
        <form className={styles.search__form}>
          <input
            className={styles.search__input}
            placeholder='Search'
            type='text'
            // onChange={searchHandler} />
            // onChange={(event) => setValue(event.target.value)}
          />
          <div className={styles.search__iconSearch}>
            <IconSearch />
          </div>
        </form>
      </div>
    </div>
  );
};

import styles from './Header.module.css';
import {Logo} from "../../assets/icons";
import {ChevronDown} from "../../assets/icons/ChevronDown";
import {Search} from "../Search";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <div className={styles.header__searchContainer}>
          <Search />
          <div className={styles.header__privateArea}>
            <div className={styles.privateArea__iconName}>AL</div>
            <div className={styles.privateArea__name}>Artem Lapitsky</div>
          </div>
          <div className={styles.header__chevronDown}>
            <ChevronDown />
          </div>
        </div>
      </div>
    </header>
  );
};

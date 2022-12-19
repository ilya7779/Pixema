import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import styles from './Header.module.css';
import {Search} from "../Search";
import {ChevronDown, LogoDark, LogoLight} from "../../assets";
import {useTheme} from "../../context";
import {Filter} from "../Filter";

export const Header = () => {
  const [icon, setIcon] = useState(<LogoLight/>);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case "light":
        setIcon(<LogoLight/>);
        break;
      case "dark":
        setIcon(<LogoDark/>);
        break;
      default:
        setIcon(<LogoLight/>);
    }
  }, [isTheme.theme]);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          {icon}
        </div>
        <div className={styles.header__searchContainer}>
          <Search/>
        </div>
        <div className={styles.header__privateArea}>
          <div className={styles.privateArea__iconName}>AL</div>
          <div className={styles.privateArea__name}>Artem Lapitsky</div>
          <Link to='/signIn' className={styles.header__chevronDown}>
            <ChevronDown/>
          </Link>
        </div>
      </div>
      <Filter/>
    </header>
  );
};

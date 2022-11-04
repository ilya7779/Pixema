import styles from './Sidebar.module.css';
import {Home} from "../../assets/icons/Home";
import {Trends} from "../../assets/icons/Trends";
import {Favorites} from "../../assets/icons/Favorites";
import {Settings} from "../../assets/icons/Settings";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__menu}>
        <div className={styles.menu__container}>
          <Home/>
          <div className={styles.menu__title}>Home</div>
        </div>
        <div className={styles.menu__container}>
          <Trends/>
          <div className={styles.menu__title}>Trends</div>
        </div>
        <div className={styles.menu__container}>
          <Favorites/>
          <div className={styles.menu__title}>Favorites</div>
        </div>
        <div className={styles.menu__container}>
          <Settings/>
          <div className={styles.menu__title}>Settings</div>
        </div>
      </div>
      <div className={styles.sidebar__copyright}>© All Rights Reserved</div>
    </aside>
  );
};

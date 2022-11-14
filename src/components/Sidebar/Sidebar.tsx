import {Link} from "react-router-dom";

import styles from './Sidebar.module.css';
import {Favorites, Home, Settings, Trends, Search} from "../../assets";



export const Sidebar = () => {


  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__menu}>
        <Link to='/' className={styles.menu__container} >
          <Home/>
          <div className={styles.menu__title}>Home</div>
        </Link>
        <Link to='/search' className={styles.menu__container} >
          <Search/>
          <div className={styles.menu__title}>Search</div>
        </Link>
        <div className={styles.menu__container}>
          <Trends/>
          <div className={styles.menu__title}>Trends</div>
        </div>
        <div className={styles.menu__container}>
          <Favorites/>
          <div className={styles.menu__title}>Favorites</div>
        </div>
        <Link to='/settings' className={styles.menu__container} >
          <Settings/>
          <div className={styles.menu__title}>Settings</div>
        </Link>
      </div>
      <div className={styles.sidebar__copyright}>© All Rights Reserved</div>
    </aside>
  );
};

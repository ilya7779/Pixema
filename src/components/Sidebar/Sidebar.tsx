import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

import styles from './Sidebar.module.css';
import {Favorites, Home, Settings, Trends, Search} from "../../assets";


export const Sidebar = () => {

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__menu}>
        <ul className={styles.menu__list}>
          <NavLink  to='/' className={({ isActive }) =>
            isActive ? styles.menu__container_active : styles.menu__container
          }>
            <Home/>
            <li className={styles.menu__title}>Home</li>
          </NavLink>
          <NavLink  to='/search' className={({ isActive }) =>
            isActive ? styles.menu__container_active : styles.menu__container
          }>
            <Search/>
            <li className={styles.menu__title}>Search</li>
          </NavLink>
          <div className={styles.menu__container}>
            <Trends/>
            <li className={styles.menu__title}>Trends</li>
          </div>
          <div className={styles.menu__container}>
            <Favorites/>
            <li className={styles.menu__title}>Favorites</li>
          </div>
          <NavLink  to='/settings' className={({ isActive }) =>
            isActive ? styles.menu__container_active : styles.menu__container
          }>
            <Settings/>
            <li className={styles.menu__title}>Settings</li>
          </NavLink>
        </ul>
      </div>
      <div className={styles.sidebar__copyright}>© All Rights Reserved</div>
    </aside>
  );
};

import React from 'react';

import styles from './AppLayout.module.css';
import {Sidebar, Header} from "../components";
import {AuthRoutes, Routes} from "../routing";
import {useAuth} from "../hooks";

export const AppLayout = () => {
  const {isAuth} = useAuth();

  return isAuth ? (
    <div className={styles.app__wrapper}>
      <Header/>
      <div className={styles.app__main}>
        <Sidebar/>
        <Routes/>
      </div>
    </div>
  ) : (
    <div>
      <AuthRoutes/>
    </div>
  )
};

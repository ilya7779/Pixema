import React, {FC} from 'react';
import styles from './AppLayout.module.css';
import {Sidebar, Header} from "../components";
import {Routes} from "../routing";

export const AppLayout: FC = () => {
  return (
    <div className={styles.app__wrapper}>
      <Header />
      <div className={styles.app__main}>
        <Sidebar />
        <Routes />
      </div>
    </div>
  );
};

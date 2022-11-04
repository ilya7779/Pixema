// import { useEffect, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import styles from './Main.module.css';
import {FilmCard} from "../../components/FilmCard";


export const Main = () => {

  return (
    <main className={styles.wrapper}>
      <div className={styles.containerFilmCards}>
        <FilmCard />
      </div>
    </main>
  );
};
// import { useEffect, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import styles from './Main.module.css';
import {FilmCard} from "../../components/FilmCard";
import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import {getFilmsTC} from "../../store/actions";
import {filmsSelector} from "../../store/selectors";
import {Film} from "../../types";
import {useAppDispatch} from "../../store";


export const Main = () => {

  const dispatch = useAppDispatch();
  const filmList = useSelector(filmsSelector)

  useEffect(() => {
    dispatch(getFilmsTC())
  }, [dispatch]);

  const films = useMemo(() => {
    return filmList.map((film: Film) =>
      <FilmCard film={film} key={film.imdbID}/>
    );
  },[filmList]);

  return (
    <main className={styles.wrapper}>
      <div className={styles.containerFilmCards}>
        {films}
      </div>
    </main>
  );
};
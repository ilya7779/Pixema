import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import styles from './Film.module.css';
import {Favorites, Share} from "../../assets";
import {currentFilmSelector} from "../../store/selectors";
import {getCurrentFilmTC} from "../../store/actions";
import {useAppDispatch} from "../../store";
import {DescriptionBlock} from "./components";


export const Film = () => {
  const { imdbID } = useParams();


  const dispatch = useAppDispatch();
  const currentFilm = useSelector(currentFilmSelector);

  useEffect(() => {
    dispatch(getCurrentFilmTC(imdbID || '' as string))
    return () => {
      dispatch(getCurrentFilmTC(''));
    };
  }, [dispatch]);

  if (currentFilm === null) {
    return null;
  }

  const {Poster, Genre, Title, imdbRating, Runtime, Plot, Year, Released, BoxOffice, Country,
    Production, Actors, Director, Writer} = currentFilm

  return (
    <div className={styles.film}>
      <div className={styles.film__leftSide}>
        <div className={styles.leftSide__photo}>
          <img src={Poster} alt=""/>
        </div>
        <div className={styles.leftSide__buttons}>
          <button className={styles.leftSide__button}>
            <Favorites />
          </button>
          <button className={styles.leftSide__button}>
            <Share />
          </button>
        </div>
      </div>
      <div className={styles.film__rightSide}>
        <div className={styles.rightSide__genres}>{Genre}</div>
        <h2 className={styles.rightSide__title}>{Title}</h2>
        <div className={styles.rightSide__ratings}>
          <div className={styles.rightSide__ratingPixema}>{imdbRating}</div>
          <div className={styles.rightSide__ratingIMDb}>IMDb {imdbRating}</div>
          <div className={styles.rightSide__time}>{Runtime}</div>
        </div>
        <p className={styles.rightSide__plot}>{Plot}</p>
        <div className={styles.rightSide__description}>
          <DescriptionBlock title='Year' content={Year}/>
          <DescriptionBlock title='Released' content={Released}/>
          <DescriptionBlock title='BoxOffice' content={BoxOffice}/>
          <DescriptionBlock title='Country' content={Country}/>
          <DescriptionBlock title='Production' content={Production}/>
          <DescriptionBlock title='Actors' content={Actors}/>
          <DescriptionBlock title='Director' content={Director}/>
          <DescriptionBlock title='Writers' content={Writer}/>
        </div>
      </div>
    </div>
  );
};
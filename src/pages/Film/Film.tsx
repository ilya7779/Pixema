import styles from './Film.module.css';
import {Share} from "../../assets";
import {Favorites} from "../../assets/icons/Favorites";
import {useSelector} from "react-redux";
import {currentFilmSelector} from "../../store/selectors";
import {useEffect} from "react";
import {getCurrentFilmTC} from "../../store/actions";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../store";


export const Film = () => {
  const { imdbID } = useParams();

  const dispatch = useAppDispatch();
  const currentFilm = useSelector(currentFilmSelector);

  useEffect(() => {
    dispatch(getCurrentFilmTC(imdbID as string))
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
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Year</div>
            <div className={styles.descriptionBlock__content}>{Year}</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Released</div>
            <div className={styles.descriptionBlock__content}>{Released}</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>BoxOffice</div>
            <div className={styles.descriptionBlock__content}>{BoxOffice}</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Country</div>
            <div className={styles.descriptionBlock__content}>{Country}</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Production</div>
            <div className={styles.descriptionBlock__content}>{Production}</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Actors</div>
            <div className={styles.descriptionBlock__content}>{Actors}</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Director</div>
            <div className={styles.descriptionBlock__content}>{Director}</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Writers</div>
            <div className={styles.descriptionBlock__content}>{Writer}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
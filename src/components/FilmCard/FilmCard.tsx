import styles from './FilmCard.module.css';
import {Film} from "../../types";
import {useNavigate} from "react-router-dom";


type FilmCardProps = {
  film: Film
}

export const FilmCard = (props: FilmCardProps) => {
  const navigate = useNavigate();
  const {film: {imdbID, Title, Poster}} = props;

  const openFilmHandler = () => {
    navigate(`/${imdbID}`);
  }

  return (
    <div className={styles.filmCard__film} onClick={() => openFilmHandler()}>
      <div className={styles.filmCard__photo}>
        <img src={Poster} alt="Poster"/>
        <div className={styles.photo__rating}>7.6</div>
      </div>
      <div className={styles.filmCard__description}>
        <div className={styles.filmCard__title}>{Title}</div>
        <div className={styles.filmCard__authors}>Adventure * Action * Fantasy</div>
      </div>
    </div>
  );
};

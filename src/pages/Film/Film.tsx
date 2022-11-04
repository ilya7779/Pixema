import styles from './Film.module.css';
import {Share} from "../../assets";
import {Favorites} from "../../assets/icons/Favorites";
import image from "../../assets/image/Rectangle 1.png"


export const Book = () => {

  return (
    <div className={styles.film}>
      <div className={styles.film__leftSide}>
        <div className={styles.leftSide__photo}>
          <img src={image} alt=""/>
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
        <div className={styles.rightSide__genres}>Adventure * Action * Fantasy</div>
        <h2 className={styles.rightSide__title}>Wonder Woman: 1984</h2>
        <div className={styles.rightSide__ratings}>
          <div className={styles.rightSide__ratingPixema}>7.6</div>
          <div className={styles.rightSide__ratingIMDb}>IMDb 7.6</div>
          <div className={styles.rightSide__time}>130 min</div>
        </div>
        <p className={styles.rightSide__aboutFilm}>
          In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana
          of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the
          Smithsonian Museum. With the memory of the brave U.S. pilot, Captain Steve Trevor, etched on her
          mind, Diana Prince becomes embroiled in a sinister conspiracy of global proportions when a
          transparent, golden-yellow citrine gemstone catches the eye of the power-hungry entrepreneur, Maxwell Lord.
        </p>
        <div className={styles.rightSide__description}>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Year</div>
            <div className={styles.descriptionBlock__content}>2011</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Released</div>
            <div className={styles.descriptionBlock__content}>15 Jul 2011</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>BoxOffice</div>
            <div className={styles.descriptionBlock__content}>$381,409,310</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Country</div>
            <div className={styles.descriptionBlock__content}>United Kingdom, United States</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Production</div>
            <div className={styles.descriptionBlock__content}>Heyday Films, Moving Picture Company, Warner Bros.</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Actors</div>
            <div className={styles.descriptionBlock__content}>Daniel Radcliffe, Emma Watson, Rupert Grint</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Director</div>
            <div className={styles.descriptionBlock__content}>David Yates</div>
          </div>
          <div className={styles.rightSide__descriptionBlock}>
            <div className={styles.descriptionBlock__title}>Writers</div>
            <div className={styles.descriptionBlock__content}>J.K. Rowling, Steve Kloves</div>
          </div>
        </div>
      </div>
    </div>
  );
};
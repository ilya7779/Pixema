import styles from './Settings.module.css';
// import {ChooseTheme} from "../../components/Search";


export const Settings = () => {

  return (
    <form className={styles.settings__wrapper}>
      <h2 className={styles.settings__title}>Profile</h2>
      <div className={styles.settings__profile}>
        <div className={styles.settings__inputContainer}>
          <h3 className={styles.inputContainer__title}>Name</h3>
          <input className={styles.inputContainer__input} type="text" placeholder="Your name"/>
        </div>
        <div className={styles.settings__inputContainer}>
          <h3 className={styles.inputContainer__title}>Email</h3>
          <input className={styles.inputContainer__input} type="email" placeholder="Your Email"/>
        </div>
      </div>
      <h2 className={styles.settings__title}>Password</h2>
      <div className={styles.settings__password}>
        <div className={styles.settings__inputContainer}>
          <h3 className={styles.inputContainer__title}>Password</h3>
          <input className={styles.inputContainer__input} type="password" placeholder="Your password"/>
        </div>
        <div className={styles.password__rightSide}>
          <div className={styles.settings__inputContainer}>
            <h3 className={styles.inputContainer__title}>New password</h3>
            <input className={styles.inputContainer__input} type="password" placeholder="New password"/>
          </div>
          <div className={styles.settings__inputContainer}>
            <h3 className={styles.inputContainer__title}>Confirm password</h3>
            <input className={styles.inputContainer__input} type="password" placeholder="Confirm password"/>
          </div>
        </div>
      </div>
      <h2 className={styles.settings__title}>Color mode</h2>
      <div className={styles.settings__colorMode}>
        <div className={styles.settings__colorModeContainer}>
          <div className={styles.colorMode__theme}>
            <div className={styles.theme__title}>Dark</div>
            <div className={styles.theme__description}>Use dark theme</div>
          </div>
          <div className={styles.colorMode__switch}>
            <label className={styles.switch}>
              <input type="checkbox"/>
              <span className={styles.slider}></span>
            </label>
            {/*<ChooseTheme />*/}
          </div>
        </div>
      </div>
      <div className={styles.settings__buttons}>
        <div className={styles.buttons__container}>
          <button className={styles.buttons__button} type={"button"}>Cancel</button>
          <button className={styles.buttons__button} type={"button"}>Save</button>
        </div>
      </div>
    </form>
  );
};
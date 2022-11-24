import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import styles from './SignUp.module.css';
import {LogoDark, LogoLight} from "../../assets";
import {useTheme} from "../../context";


export const SignUp = () => {
  const [icon, setIcon] = useState(<LogoLight/>);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case "light":
        setIcon(<LogoLight/>);
        break;
      case "dark":
        setIcon(<LogoDark/>);
        break;
      default:
        setIcon(<LogoLight/>);
    }
  }, [isTheme.theme]);




  return (
    <form className={styles.wrapper}>
      <div className={styles.logo}>
        {icon}
      </div>
      <div className={styles.signIn__container}>
        <div className={styles.signIn__title}>Sign Up</div>
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Name</h3>
          <input className={styles.inputContainer__input} type="text" placeholder="Your name"/>
        </div>
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Email</h3>
          <input className={styles.inputContainer__input} type="email" placeholder="Your email"/>
        </div>
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Password</h3>
          <input className={styles.inputContainer__input} type="password" placeholder="Your password"/>
        </div>
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Confirm password</h3>
          <input className={styles.inputContainer__input} type="password" placeholder="Confirm  password"/>
        </div>
        <button className={styles.signIn__button} type="button" >Sign in</button>
        <div className={styles.signIn__signUp}>Don’t have an account? <Link to={'/signIn'}>Sign In</Link></div>
      </div>
      <div className={styles.copyright}>© All Rights Reserved</div>
    </form>
  );
};
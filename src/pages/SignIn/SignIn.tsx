import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import styles from './SignIn.module.css';
import {LogoDark, LogoLight} from "../../assets";
import {useTheme} from "../../context";
import {
  setAuthorizationUserEmailAC,
  setAuthorizationUserPasswordAC, setUserEmailAC, setUserIDAC, setUserTokenAC,
} from "../../store/actions/authorization.actions";
import {useAppDispatch} from "../../store";
import {authorizationUserEmailSelector, authorizationUserPasswordSelector} from "../../store/selectors";


export const SignIn = () => {
  const dispatch = useAppDispatch();
  const userEmail = useSelector(authorizationUserEmailSelector)
  const userPassword = useSelector(authorizationUserPasswordSelector)


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

  const handleAuthorization = (email: any, password: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUserEmailAC(user.email || '{}'))
        dispatch(setUserIDAC(user.uid))
        // @ts-ignore
        dispatch(setUserTokenAC(user.accessToken))
        dispatch(setAuthorizationUserEmailAC(''));
        dispatch(setAuthorizationUserPasswordAC(''));
      })
      .catch(console.error)
      // .catch(() => alert('Invalid user'))
  }

  const userEmailHandler = (event: any) => {
    dispatch(setAuthorizationUserEmailAC(event.target.value));
  };
  const userPasswordHandler = (event: any) => {
    dispatch(setAuthorizationUserPasswordAC(event.target.value));
  };

  return (
    <form className={styles.wrapper}>
      <div className={styles.logo}>
        {icon}
      </div>
      <div className={styles.signIn__container}>
        <div className={styles.signIn__title}>Sign In</div>
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Email</h3>
          <input className={styles.inputContainer__input}
                 type="email"
                 placeholder="Your email"
                 value={userEmail}
                 onChange={(event) => userEmailHandler(event)}
          />
        </div>
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Password</h3>
          <input className={styles.inputContainer__input}
                 type="password"
                 placeholder="Your password"
                 value={userPassword}
                 onChange={(event) => userPasswordHandler(event)}
          />
        </div>
        <div className={styles.signIn__forgotPassword}>Forgot password?</div>
        <button className={styles.signIn__button}
                type="button"
                onClick={() => handleAuthorization(userEmail, userPassword)}
        >Sign in
        </button>
        <div className={styles.signIn__signUp}>Don’t have an account? <Link to={'/signUp'}>Sign Up</Link></div>
      </div>
      <div className={styles.copyright}>© All Rights Reserved</div>
    </form>
  );
};
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import styles from './SignUp.module.css';
import {LogoDark, LogoLight} from "../../assets";
import {useTheme} from "../../context";
import {useAppDispatch} from "../../store";
import {
  registrationConfirmUserPasswordSelector,
  registrationUserEmailSelector,
  registrationUserNameSelector,
  registrationUserPasswordSelector
} from "../../store/selectors";
import {
  setRegistrationConfirmUserPasswordAC,
  setRegistrationUserEmailAC,
  setRegistrationUserNameAC,
  setRegistrationUserPasswordAC, setUserEmailAC, setUserIDAC, setUserTokenAC
} from "../../store/actions/authorization.actions";


export const SignUp = () => {
  const dispatch = useAppDispatch();
  const userName = useSelector(registrationUserNameSelector);
  const userEmail = useSelector(registrationUserEmailSelector);
  const userPassword = useSelector(registrationUserPasswordSelector);
  const confirmUserPassword = useSelector(registrationConfirmUserPasswordSelector);

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

  const handleRegister = (email: any, password: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUserEmailAC(user.email || '{}'))
        dispatch(setUserIDAC(user.uid))
        // @ts-ignore
        dispatch(setUserTokenAC(user.accessToken))
        dispatch(setRegistrationUserNameAC(''))
        dispatch(setRegistrationUserEmailAC(''))
        dispatch(setRegistrationUserPasswordAC(''))
        dispatch(setRegistrationConfirmUserPasswordAC(''))
      })
      .catch(console.error)
  }

  const userNameHandler = (event: any) => {
    dispatch(setRegistrationUserNameAC(event.target.value));
  };
  const userEmailHandler = (event: any) => {
    dispatch(setRegistrationUserEmailAC(event.target.value));
  };
  const userPasswordHandler = (event: any) => {
    dispatch(setRegistrationUserPasswordAC(event.target.value));
  };
  const confirmUserPasswordHandler = (event: any) => {
    dispatch(setRegistrationConfirmUserPasswordAC(event.target.value));
  };

  return (
    <form className={styles.wrapper}>
      <div className={styles.logo}>
        {icon}
      </div>
      <div className={styles.signIn__container}>
        <div className={styles.signIn__title}>Sign Up</div>
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Name</h3>
          <input className={styles.inputContainer__input}
                 type="text"
                 placeholder="Your name"
                 value={userName}
                 onChange={(event) => userNameHandler(event)}
          />
        </div>
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
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Confirm password</h3>
          <input className={styles.inputContainer__input}
                 type="password"
                 placeholder="Confirm  password"
                 value={confirmUserPassword}
                 onChange={(event) => confirmUserPasswordHandler(event)}
          />
        </div>
        <button className={styles.signIn__button}
                type="button"
                onClick={() => handleRegister(userEmail, userPassword)} >Sign in</button>
        <div className={styles.signIn__signUp}>Don’t have an account? <Link to={'/signIn'}>Sign In</Link></div>
      </div>
      <div className={styles.copyright}>© All Rights Reserved</div>
    </form>
  );
};
import {ChangeEvent, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {SubmitHandler, useForm} from "react-hook-form";
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
  const push = useNavigate()

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

  const handleAuthorization = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUserEmailAC(user.email || ''));
        dispatch(setUserIDAC(user.uid));
        dispatch(setUserTokenAC(user.refreshToken));
        dispatch(setAuthorizationUserEmailAC(''));
        dispatch(setAuthorizationUserPasswordAC(''));
        push('/');
      })
      .catch(console.error)
  }

  const userEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthorizationUserEmailAC(event.target.value));
  };
  const userPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthorizationUserPasswordAC(event.target.value));
  };

  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    formState,
    reset,
  } = useForm<Inputs>({
    mode: "onTouched",
  });

  type Inputs = {
    userEmail: string,
    userPassword: string,
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
    reset();
  }
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.logo}>
        {icon}
      </div>
      <div className={styles.signIn__container}>
        <div className={styles.signIn__title}>Sign In</div>
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Email</h3>
          <input className={styles.inputContainer__input}
                 {...register("userEmail", {
                   required: 'The field is required',
                   pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: "invalid email address"
                   },
                   minLength: {
                     value: 5,
                     message: 'Please enter at least 5 characters'
                   }
                 })}
                 type="email"
                 placeholder="Your email"
                 value={userEmail}
                 onChange={(event) => userEmailHandler(event)}
          />
          <div className={styles.input__errors}>
            {errors?.userEmail && <p>{errors?.userEmail?.message || 'Error!'}</p>}
          </div>
        </div>
        <div className={styles.signIn__inputContainer}>
          <h3 className={styles.inputContainer__title}>Password</h3>
          <input className={styles.inputContainer__input}
                 {...register("userPassword", {
                   required: 'The field is required',
                   pattern: {
                     value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/g,
                     message: "invalid password address"
                   },
                   minLength: {
                     value: 6,
                     message: 'Please enter at least 6 characters'
                   }
                 })}
                 type="password"
                 placeholder="Your password"
                 value={userPassword}
                 onChange={(event) => userPasswordHandler(event)}
          />
          <div className={styles.input__errors}>
            {errors?.userPassword && <p>{errors?.userPassword?.message || 'Error!'}</p>}
          </div>
        </div>
        <div className={styles.signIn__forgotPassword}>Forgot password?</div>
        <button className={styles.signIn__button}
                type="button"
                disabled={!isValid}
                onClick={() => handleAuthorization(userEmail, userPassword)}
        >Sign in
        </button>
        <div className={styles.signIn__signUp}>Don’t have an account? <Link to={'/signUp'}>Sign Up</Link></div>
      </div>
      <div className={styles.copyright}>© All Rights Reserved</div>
    </form>
  );
};
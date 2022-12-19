import {ChangeEvent, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {SubmitHandler, useForm} from "react-hook-form";

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
  setRegistrationUserPasswordAC, setUserIDAC, setUserTokenAC
} from "../../store/actions/authorization.actions";


export const SignUp = () => {
  const dispatch = useAppDispatch();
  const userName = useSelector(registrationUserNameSelector);
  const userEmail = useSelector(registrationUserEmailSelector);
  const userPassword = useSelector(registrationUserPasswordSelector);
  const confirmUserPassword = useSelector(registrationConfirmUserPasswordSelector);
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

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUserIDAC(user.uid));
        dispatch(setUserTokenAC(user.refreshToken));
        dispatch(setRegistrationUserNameAC(''));
        dispatch(setRegistrationUserEmailAC(''));
        dispatch(setRegistrationUserPasswordAC(''));
        dispatch(setRegistrationConfirmUserPasswordAC(''));
        push('/signIn');
      })
      .catch(console.error)
  }

  const userNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegistrationUserNameAC(event.target.value));
  };
  const userEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegistrationUserEmailAC(event.target.value));
  };
  const userPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegistrationUserPasswordAC(event.target.value));
  };
  const confirmUserPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRegistrationConfirmUserPasswordAC(event.target.value));
  };

  const {
    register,
    watch,
    formState: {errors, isValid},
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  type Inputs = {
    userName: string,
    userEmail: string,
    userPassword: string,
    confirm_userPassword: string,
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
      <div className={styles.signUp__container}>
        <div className={styles.signUp__title}>Sign Up</div>
        <div className={styles.signUp__inputContainer}>
          <h3 className={styles.inputContainer__title}>Name</h3>
          <input className={styles.inputContainer__input}
                 {...register("userName", {
                   required: 'The field is required',
                   minLength: {
                     value: 3,
                     message: 'Please enter at least 3 characters'
                   }
                 })}
                 type="text"
                 placeholder="Your name"
                 value={userName}
                 onChange={(event) => userNameHandler(event)}
          />
          <div className={styles.input__errors}>
            {errors?.userName && <p>{errors?.userName?.message || 'Error!'}</p>}
          </div>
        </div>
        <div className={styles.signUp__inputContainer}>
          <h3 className={styles.inputContainer__title}>Email <span>*</span></h3>
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
        <div className={styles.signUp__inputContainer}>
          <h3 className={styles.inputContainer__title}>Password <span title="Must contain at least one number and
          one uppercase and lowercase letter, and at least 8 or more characters">*</span></h3>
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
        <div className={styles.signUp__inputContainer}>
          <h3 className={styles.inputContainer__title}>Confirm password <span title="Must contain at least one
          number and one uppercase and lowercase letter, and at least 8 or more characters">*</span></h3>
          <input className={styles.inputContainer__input}
                 {...register("confirm_userPassword", {
                   required: 'The field is required',
                   validate: (val: string) => {
                     if (watch('userPassword') != val) {
                       return "Your passwords do no match";
                     }
                   },
                   minLength: {
                     value: 6,
                     message: 'Please enter at least 6 characters'
                   }
                 })}
                 type="password"
                 placeholder="Confirm  password"
                 value={confirmUserPassword}
                 onChange={(event) => confirmUserPasswordHandler(event)}
          />
          <div className={styles.input__errors}>
            {errors?.confirm_userPassword && <p>{errors?.confirm_userPassword?.message || 'Error!'}</p>}
          </div>
        </div>
        <button className={styles.signUp__button}
                disabled={!isValid}
                type="button"
                onClick={() => handleRegister(userEmail, userPassword)}>Sign up</button>
        <div className={styles.signUp__signUp}>Don’t have an account? <Link to={'/signIn'}>Sign In</Link></div>
      </div>
      <div className={styles.copyright}>© All Rights Reserved</div>
    </form>
  );
};
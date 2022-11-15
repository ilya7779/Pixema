import {useState} from "react";

import {useTheme} from "../../../context";
import styles from "./InputSwitch.module.css";

export const InputSwitch = () => {
  const { theme, changeTheme } = useTheme();

  const [checked, setChecked] = useState(false);
  const changeCheckbox = () => {
    setChecked(!checked);
  }

  return (
    <>
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={changeCheckbox} onClick={() => changeTheme()}/>
        <span className={styles.slider}></span>
      </label>
     </>
   )
}

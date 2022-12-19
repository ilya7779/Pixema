import {Theme} from "../../context";

export const changeCssVariables = (theme: Theme) => {
  const root = document.querySelector(':root');
   // @ts-ignore
  // root.style.setProperty('--theme-default-bgColor', `var(--theme-${theme}-bgColor)`);

  const cssVariables = ['bgColor', 'bgColorInput', 'colorText', 'bgColorButton', 'bgColorContainer', 'border']
  cssVariables.forEach(element => {
   // @ts-ignore
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  })
}

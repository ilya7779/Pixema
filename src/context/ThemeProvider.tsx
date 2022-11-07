// import {createContext, FC, ReactNode, useCallback, useContext, useState} from "react";
// import {changeCssVariables} from "../services";
//
// export type Theme = "light" | "dark"
// type ThemeContextType = {
//   theme: Theme;
//   changeTheme: (theme: Theme) => void;
// }
// type ProviderProps = {
//   children: ReactNode;
// }
//
// const ThemeContext = createContext<ThemeContextType | null>(null);
// ThemeContext.displayName = 'ThemeContext';
//
// export const ThemeProvider: FC<ProviderProps> = ({children, ...props}) => {
//   const [theme, setTheme] = useState<Theme>('light');
//
//   const changeTheme = useCallback((theme: Theme) => {
//     setTheme(theme);
//     // changeCssVariables(theme);
//   }, []);
//
//   const value = {
//     theme: theme,
//     changeTheme: changeTheme
//   }
//
//   return (
//     <ThemeContext.Provider
//       value={value}
//       {...props}
//     >
//       {children}
//     </ThemeContext.Provider>
//   )
// }
//
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//
//   if (!context) {
//     throw new Error('useLanguage must be inside a Provider with a value');
//   }
//
//   const { theme, changeTheme } = context;
//
//   return {
//     theme,
//     changeTheme,
//   };
// };
export {}
// import {createContext, FC, ReactNode, useContext, useEffect, useRef, useState} from 'react';
//
// export type Theme = "light" | "dark"
// export type ThemeContext = {
//   theme: Theme;
//   changeTheme: () => void;
// };
//
// const ThemeContext = createContext<ThemeContext | null>(null);
// ThemeContext.displayName = 'ThemeContext';
//
// export const ThemeProvider: FC<{ children: ReactNode }> = (props) => {
//   // context values
//   // const themeRef = useRef<Theme | null>(null);
//   const [theme, setTheme] = useState<Theme>('light');
//
//   const changeTheme = () => {
//     if (theme === 'light') setTheme('dark')
//     else if (theme === 'dark') setTheme('light')
//     // setTheme(theme);
//     // themeRef.current = theme;
//   };
//
//   const contextValues = {theme, changeTheme};
//
//   return <ThemeContext.Provider value={contextValues} {...props} />;
// };
//
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//
//   if (!context) {
//     throw new Error('useSocket hook must be used inside ThemeProvider context');
//   }
//
//   const {theme, changeTheme} = context;
//
//   return {
//     theme,
//     changeTheme,
//   };
// };

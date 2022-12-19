import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {initializeApp} from "firebase/app";

import './assets/fonts/fonts.css'; // шрифты
import './index.css'; // глобальные стили

import {AppLayout} from './layout/';
import {store} from './store';
import {firebaseConfig} from "./services/firebase";
import {ThemeProvider} from "./context"

initializeApp(firebaseConfig);

export const AppRoot = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <AppLayout/>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

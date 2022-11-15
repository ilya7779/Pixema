import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import './assets/fonts/fonts.css'; // шрифты
import './index.css'; // глобальные стили

import {AppLayout} from './layout/';
import {store} from './store';
import {ThemeProvider} from "./context";

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

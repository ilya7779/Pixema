import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css'; // глобальные стили
import './assets/fonts/fonts.css'; // шрифты

import { AppLayout } from './layout/';
import { store } from './store';

export const AppRoot = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </Provider>
  );
};

import React, {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {Film, Main, NotFound, Search, Settings} from "../../pages";


export const Routes: FC = () => {

  return (
    <RoutesSource>
      <Route path='/' element={<Main />}/>
      <Route path='/search' element={<Search />}/>
      <Route path='/film/:imdbID' element={<Film />}/>
      <Route path='/settings' element={<Settings />}/>
      <Route path='*' element={<NotFound />}/>
    </RoutesSource>
  );
};

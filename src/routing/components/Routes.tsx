import React, {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {Main} from "../../pages";
import {Film} from "../../pages/Film";

export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<Main />}/>
      <Route path='/:imdbID' element={<Film />}/>
    </RoutesSource>
  );
};

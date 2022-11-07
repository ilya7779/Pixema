import {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {Film, Main, Settings} from "../../pages";


export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<Main />}/>
      <Route path='/film/:imdbID' element={<Film />}/>
      <Route path='/settings' element={<Settings />}/>
    </RoutesSource>
  );
};

import {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {Film, Main, Search, Settings, SignIn, SignUp} from "../../pages";


export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<Main />}/>
      <Route path='/search' element={<Search />}/>
      <Route path='/film/:imdbID' element={<Film />}/>
      <Route path='/settings' element={<Settings />}/>
      <Route path='/signIn' element={<SignIn />}/>
      <Route path='/signUp' element={<SignUp />}/>
    </RoutesSource>
  );
};

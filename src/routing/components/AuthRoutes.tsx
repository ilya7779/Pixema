import {FC} from 'react';
import {Navigate, Route, Routes as RoutesSource} from 'react-router-dom';

import {NotFound, SignIn, SignUp} from "../../pages";

export const AuthRoutes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<Navigate to="signIn" />}/>
      <Route path='/search' element={<Navigate to="/signIn" />}/>
      <Route path='/film/:imdbID' element={<Navigate to="/signIn" />}/>
      <Route path='/settings' element={<Navigate to="/signIn" />}/>
      <Route path='/signIn' element={<SignIn />}/>
      <Route path='/signUp' element={<SignUp />}/>
      <Route path='*' element={<NotFound />}/>
    </RoutesSource>
  );
};

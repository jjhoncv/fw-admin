import React from 'react'
import { LoginFeature } from './login';

export const Login = ({ history }) => {

  sessionStorage.clear();

  return (
    <LoginFeature
      history={history}
    />
  );
};

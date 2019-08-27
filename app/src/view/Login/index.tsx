import React from 'react'
import { LoginFeature } from './session';

export const Login = ({ history }) => {

  sessionStorage.clear();

  return (
    <LoginFeature history={history} />
  );
};

import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router , Redirect } from 'react-router-dom';
import { Dashboard } from '@app/src/components/Dashboard';
import { Home } from '@app/src/components/Home';
import { useAuthorization } from '@app/src/utils/validations';


// import { UserListContainer } from '@app/src/view/Users/containers/UserListContainer';
// import { UserNewContainer } from '@app/src/view/Users/containers/UserNewContainer';

const router = [
  {
    component: Dashboard,
    routes: [
      {
        path: '/admin/dashboard',
        exact: true,
        component: Home
      },
      // {
      //   path: '/admin/users',
      //   exact: true,
      //   component: UserListContainer
      // },
      // {
      //   path: '/admin/user/new',
      //   exact: true,
      //   component: UserNewContainer
      // }
    ]
  }];


export const Page = () => {
  const isValid = useAuthorization();
  return isValid ? <Router>{renderRoutes(router as any)}</Router> : <Redirect to="/admin" />
}

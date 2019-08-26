import React, { SFC, Fragment } from 'react';
import { App } from '@app/src/App';
import { Login } from './../../view/Login'

const NotFound: SFC<{}> = () => <Fragment>NotFound</Fragment>;
import { Page } from '@app/src/components/Page'

export const routes = [
  {
    component: App,
    routes: [
      {
        path: '/admin',
        component: Login,
        exact: true
      },
      {
        path: '/admin/:page?/:action?',
        component: Page
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
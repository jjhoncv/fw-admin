import React, { SFC, Fragment } from 'react';
import { App } from '@app/src/App';
import { LoginContainer } from '@app/src/view/Login/containers/LoginContainer';

const NotFound: SFC<{}> = () => <Fragment>NotFound</Fragment>;
import { Page } from '@app/src/components/Page'

export const routes = [
    {
        component: App,
        routes: [
            {
                path: '/admin',
                component: LoginContainer,
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
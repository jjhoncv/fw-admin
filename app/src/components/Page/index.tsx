import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';

import { Dashboard } from '@app/src/components/Dashboard';
import { Home } from '@app/src/components/Home';

import { UserListContainer } from '@app/src/view/Users/containers/UserListContainer';
import { UserNewContainer } from '@app/src/view/Users/containers/UserNewContainer';

class ReturnComponent extends React.Component<any, {}> {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        location.href = '/admin';
    }
    render() {
        return <></>
    }
}

const router = [
    {
        component: Dashboard,
        routes: [
            {
                path: '/admin/dashboard',
                exact: true,
                component: Home
            },
            {
                path: '/admin/users',
                exact: true,
                component: UserListContainer
            },
            {
                path: '/admin/user/new',
                exact: true,
                component: UserNewContainer
            }
        ]
    }];


export const Page = () => {
    let render = <ReturnComponent />
    if (localStorage.getItem("token")) {
        render = <Router>{renderRoutes(router as any)}</Router>
    }
    return render
}

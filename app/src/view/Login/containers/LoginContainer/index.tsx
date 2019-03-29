import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { Login } from '@app/src/view/Login/components/Login'
import { successLogin } from './../../../../view/Login/state/login/actions'
import * as selectLogin from './../../state/login/selectors'

interface Props {
    successLogin: Function;
    history: any;
}

// export const AdminStyled = styled.div`
//     display:flex;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     width: 70%;
// `;

export const WrapperLogin = styled.div`
    width: 100%;
    justify-items: center;
    display: flex;
    align-content: center;
`;

class Container extends Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { history } = this.props;
        let token = localStorage.getItem('token')
        if (token) {
            history.push('/admin/dashboard')
        }
    }
    render(): JSX.Element {
        const { history, successLogin } = this.props;
        return (
            <WrapperLogin>
                <Login history={history} success={successLogin} />
            </WrapperLogin>
        )
    }
}



const mapStateToProps = state => ({
    logged: selectLogin.getLogged(state)
});

const mapDispatchToProps = dispatch => ({
    successLogin: (username, password, history) => dispatch(successLogin(username, password, history))
});

export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
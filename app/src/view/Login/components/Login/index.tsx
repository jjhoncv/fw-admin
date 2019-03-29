import React, { Component } from 'react'

import { FormElement, Label, Input, Form, Page } from '@app/src/components/common'

import styled from 'styled-components'

interface ILogin {
    success: Function;
    history: any;
}

export interface IStateLogin {
    username: string;
    password: string;
}

const PageLogin = styled(Page)`
    width: 30%;
`;

export class Login extends Component<ILogin, IStateLogin> {
    constructor(props: ILogin) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUser(e: any) {
        this.setState({ username: e.target.value })
    }

    handlePassword(e: any) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e: any) {
        const { success, history } = this.props;
        const { username, password } = this.state;
        e.preventDefault();
        success(username, password, history);
    }

    render(): JSX.Element {
        return (
            <PageLogin title="Login">
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    <FormElement>
                        <Label>Username</Label>
                        <Input type="text" name="username" onChange={(e) => this.handleUser(e)} />
                    </FormElement>
                    <FormElement>
                        <Label>Password</Label>
                        <Input type="password" name="password" onChange={(e) => this.handlePassword(e)} />
                    </FormElement>
                    <Input type="submit" value="Login" />
                </Form>
            </PageLogin>
        )
    }
}

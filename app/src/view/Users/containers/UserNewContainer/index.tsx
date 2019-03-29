import React, { SFC } from 'react';
import { connect } from 'react-redux';

import { FormElement, Label, Input, Form, Page, Select } from '@app/src/components/common'

interface Props {
    history: any;
}

const Container: SFC<Props> = ({ history }) => {

    const handleAddUser = () => {
        history.push('/admin/users');
    }

    return (
        <Page title="User New">
            <Form>
                <FormElement>
                    <Label>Role </Label>
                    <Select>
                        <option value="1">Admin</option>
                        <option value="2">Registered User</option>
                    </Select>
                </FormElement>
                <FormElement>
                    <Label>Name </Label>
                    <Input type="text" name="name" />
                </FormElement>
                <FormElement>
                    <Label>Surname </Label>
                    <Input type="text" name="surname" />
                </FormElement>
                <FormElement>
                    <Label>Login </Label>
                    <Input type="text" name="login" />
                </FormElement>
                <FormElement>
                    <Label>Password </Label>
                    <Input type="text" name="password" />
                </FormElement>
                <Input type="button" onClick={handleAddUser} value="Add User" />

            </Form>
        </Page>
    )

}

// const mapStateToProps = state => ({
//     isLoggedIn: selectLogin.getLogin(state)
// });

const mapDispatchToProps = dispatch => ({
    // successLogin: (username, password, history) => dispatch(successLogin(username, password, history))
});

export const UserNewContainer = connect(
    null,
    mapDispatchToProps
)(Container);
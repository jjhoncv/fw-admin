import * as React from 'react';
import { connect } from 'react-redux';

import { Page } from '../../../../Components/Page'
import { HeadPage, MainPage } from '../../../../Components/Page/styled'

import styled from 'styled-components'

interface Props {
    history: any;
}

export const Form = styled.form`
    label {
        width: 200px;
        display: inline-block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    input[type=text]{
        padding: 6px 12px;
        border-radius: 4px;
        border: 1px solid #ccc;
        height: 20px;
    }
    select {
        padding: 6px 12px;
        border-radius: 4px;
        border: 1px solid #ccc;
        background: white;
    }
`;

export const ItemForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

const Container: React.SFC<Props> = ({ history }) => {

    const handleAddUser = () => {
        history.push('/admin/user/new');
    }

    return (
        <Page>
            <HeadPage>
                <h1>New User</h1>
                <button onClick={handleAddUser}>Add User</button>
            </HeadPage>
            <MainPage>
                <Form action="">
                    <ItemForm>
                        <label htmlFor="">Role </label>
                        <select>
                            <option value="1">Admin</option>
                            <option value="2">Registered User</option>
                        </select>
                    </ItemForm>
                    <ItemForm>
                        <label htmlFor="">Name </label>
                        <input type="text" name="name" id="" />
                    </ItemForm>
                    <ItemForm>
                        <label htmlFor="">Surname </label>
                        <input type="text" name="surname" id="" />
                    </ItemForm>
                    <ItemForm>
                        <label htmlFor="">Login </label>
                        <input type="text" name="login" id="" />
                    </ItemForm>
                    <ItemForm>
                        <label htmlFor="">Password </label>
                        <input type="text" name="password" id="" />
                    </ItemForm>
                </Form>
            </MainPage>
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
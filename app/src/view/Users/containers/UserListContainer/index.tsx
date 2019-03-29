import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Table, Page } from '@app/src/components/common'

import * as selectUsers from './../../state/users/selectors';
import { fetchUsers } from './../../../../view/Users/state/users/actions'
import { User } from '@app/src/view/Users/models/User'

interface Props {
    history: any;
    fetchUsers: Function;
    users: User[]
}

class Container extends Component<Props, {}> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchUsers();
    }
    handleNewUser() {
        this.props.history.push('/admin/user/new');
    }
    render(): JSX.Element {
        const { users } = this.props;
        return (
            <Page title="User List"
                options={
                    <Input type="button" onClick={(e) => { this.handleNewUser() }} value="New User" />
                }>
                <Table data={users} />
            </Page>
        )
    }
}

const mapStateToProps = state => ({
    users: selectUsers.getUsers(state)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
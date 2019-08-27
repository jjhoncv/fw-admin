import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { LoginForm } from './LoginForm'
import { fetchLogin } from './../../state/user/actions'
import * as selectUser from './../../state/user/selectors';

const FormContainerRedux = reduxForm({
  form: 'loginForm',
  onSubmit(values, dispatch, { history }) {
    dispatch(fetchLogin(values, history));
  }
})(LoginForm);

const mapStateToProps = state => ({
  errorMessage: selectUser.getErrorMessage(state),
  isFetching: selectUser.getIsFetching(state)
});

export const LoginFormContainer = connect(
  mapStateToProps
)(FormContainerRedux);

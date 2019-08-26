import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Form } from './Form'
import { fetchLogin } from './../../state/user/actions'
import * as selectUser from './../../state/user/selectors';

const FormContainer = reduxForm({
  form: 'loginForm',
  onSubmit(values, dispatch, { history }) {
    dispatch(fetchLogin(values, history));
  }
})(Form);

const mapStateToProps = state => ({
  errorMessage: selectUser.getErrorMessage(state),
  isFetching: selectUser.getIsFetching(state)
});

const FormContainerState = connect(
  mapStateToProps
)(FormContainer)

export default FormContainerState;
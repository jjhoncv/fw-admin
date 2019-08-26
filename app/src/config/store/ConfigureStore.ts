import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { user as userReducer } from './../../view/Login/login/state/user';
import users from '@app/src/view/Users/state';
import sections from '@app/src/view/Sections/state';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      form: reduxFormReducer,
      // users,
      // sections
    }),
    (window as any).__PRELOADED_STATE__,
    composeEnhancers(
      applyMiddleware(
        thunk
      )
    )
  );
  return store;
}

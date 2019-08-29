import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import { user as userReducer } from '@app/src/view/Login/session/state/user';
import { section as sectionReducer } from '@app/src/view/Menu/menu/state/section';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      form: reduxFormReducer,
      // users,
      section: sectionReducer
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

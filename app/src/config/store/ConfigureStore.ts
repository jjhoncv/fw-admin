import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import login from '@app/src/view/Login/state';
import users from '@app/src/view/Users/state';
import sections from '@app/src/view/Sections/state';

const reduxDevTool = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
    const store = createStore(
        combineReducers({
            login,
            users,
            sections
        }),
        reduxDevTool,
        applyMiddleware(
            thunk
        )
    );
    return store;
}

import { createStore, applyMiddleware, Store } from 'redux';

declare module 'redux' {
    export type GenericStoreEnhancer = any;
}
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import rootReducer, { RootState } from './reducers';
import { logger, action, status } from './middlewares';
import { createUserManager } from 'sources';

export async function configureStore(initialState?: RootState, history?) {
    const routerMiddleware = createRouterMiddleware(history);

    let middleware = composeWithDevTools(applyMiddleware(logger, createUserManager, routerMiddleware, action, status));
    const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

    return store;
}

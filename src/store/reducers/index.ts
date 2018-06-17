import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { reducer as appReducer, AppState } from './app';

export interface RootState {
    app: AppState;
    router: RouterState;
}

export default combineReducers<RootState>({
    app: appReducer,
    router: routerReducer,
});

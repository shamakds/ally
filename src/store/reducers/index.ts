import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { reducer as appReducer, AppState } from './app';
import { reducer as gameReducer } from './game';
import { reducer as userReducer } from './user';

export interface RootState {
    app: AppState;
    router: RouterState;
    game: any;
    user: any;
}

export default combineReducers<RootState>({
    app: appReducer,
    router: routerReducer,
    game: gameReducer,
    user: userReducer,
});

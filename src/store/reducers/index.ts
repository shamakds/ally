import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { reducer as appReducer, AppState } from './app';
import { reducer as gameReducer } from './game';

export interface RootState {
    app: AppState;
    router: RouterState;
    game: any;
}

export default combineReducers<RootState>({
    app: appReducer,
    router: routerReducer,
    game: gameReducer
});

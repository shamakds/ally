import { handleActions, Action } from 'redux-actions';
import { APP_DATA, APP_PENDING, ACTION_SUCCESS, APP_READY, GAME_CREATE } from "../../common/constants";

export type AppState = {};

const initialState : AppState = {};

export const reducer = handleActions<AppState, any>({
    [APP_PENDING]: (state: AppState, action) => {
        return { ...state, isPending: true };
    },
    [APP_READY]: (state: AppState, action) => {
        return { ...state, isPending: false};
    },
    [`${APP_DATA}_${ACTION_SUCCESS}`]: (state: AppState, action) => {
        return { ...state, ...action.payload};
    },
    [`${GAME_CREATE}_${ACTION_SUCCESS}`]: (state: AppState, action) => {
        return { ...state, game: action.payload};
    },
}, initialState);
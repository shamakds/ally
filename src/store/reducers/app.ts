import { handleActions, Action } from 'redux-actions';
import { APP_DATA, ACTION_PENDING, ACTION_SUCCESS, APP_READY, GAME_ACTIONS } from "../../common/constants";

export type AppState = {};

const initialState : AppState = {};

export const reducer = handleActions<AppState, any>({
    [ACTION_PENDING]: (state: AppState, action) => {
        return { ...state, isPending: true };
    },
    [ACTION_SUCCESS]: (state: AppState, action) => {
        return { ...state, isPending: false};
    },
    [APP_READY]: (state: AppState, action) => {
        return { ...state, isPending: false};
    },
    [`${APP_DATA}_${ACTION_SUCCESS}`]: (state: AppState, action) => {
        return { ...state, ...action.payload};
    },
    [`${GAME_ACTIONS.GAME_CREATE}_${ACTION_SUCCESS}`]: (state: AppState, action) => {
        return { ...state, game: action.payload};
    },
}, initialState);
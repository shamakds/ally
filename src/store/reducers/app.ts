import { handleActions, Action } from 'redux-actions';
import { GAME_ACTIONS, ACTION_PENDING, ACTION_SUCCESS, APP_ACTIONS } from "../../common/constants";

export type AppState = {};

const initialState : AppState = {};

export const reducer = handleActions<AppState, any>({
    [ACTION_PENDING]: (state: AppState, action) => {
        return { ...state, isPending: true };
    },
    [ACTION_SUCCESS]: (state: AppState, action) => {
        return { ...state, isPending: false};
    },
    [APP_ACTIONS.READY]: (state: AppState, action) => {
        return { ...state, isPending: false};
    },
    [`${APP_ACTIONS.DEFAULT}_${ACTION_SUCCESS}`]: (state: AppState, action) => {
        return { ...state, ...action.payload};
    },
    [`${GAME_ACTIONS.GAME_CREATE}_${ACTION_SUCCESS}`]: (state: AppState, action) => {
        return { ...state, game: action.payload};
    },
}, initialState);
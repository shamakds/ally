import { handleActions, Action } from 'redux-actions';
import { USER_ACTIONS } from "sources";

export type State = {};

const initialState : State = null;

export const reducer = handleActions<State, any>({
    [USER_ACTIONS.AUTH]: (state: State, action) => {
        return { ...state, ...action.payload };
    },
}, initialState);
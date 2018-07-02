import { GAME_ACTIONS, USER_ACTIONS } from "sources";
import AppService from "../../common/services";

export const getAppData = async () => {
    return new Promise((res, rej) => {

    });
};

/* USER */
export const getUser = id => ({
    type: USER_ACTIONS.GET,
    payload: AppService.getUser(id)
});
export const addUser = user => ({
    type: USER_ACTIONS.ADD,
    payload: AppService.addUser(user)
});

export const authenticate = (err, profile) => ({
    type: USER_ACTIONS.AUTH,
    payload: profile
});

/* GAME */
export const createGame = (props) => ({
    type: GAME_ACTIONS.GAME_CREATE,
    redirect: "/game/:id",
    payload: AppService.createGame(props)
});
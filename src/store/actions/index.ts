import { APP_DATA, GAME_ACTIONS } from "../../common/constants";
import AppService from "../../common/services";

export const getAppData = () => ({
    type: APP_DATA,
    payload: AppService.getUserData()
});

export const createGame = (props) => ({
    type: GAME_ACTIONS.GAME_CREATE,
    redirect: "/game/:id",
    payload: AppService.createGame(props)
});
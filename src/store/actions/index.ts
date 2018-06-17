import { APP_DATA, GAME_CREATE } from "../../common/constants";
import AppService from "../../common/services";

export const getAppData = () => ({
    type: APP_DATA,
    payload: AppService.getUserData()
});

export const createGame = (props) => ({
    type: GAME_CREATE,
    redirect: "/game/:id",
    payload: AppService.createGame(props)
});
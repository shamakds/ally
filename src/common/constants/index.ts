export const ACTION_PENDING = "PENDING";
export const ACTION_SUCCESS = "SUCCESS";
export const ACTION_FAILURE = "FAILURE";

export const APP_DATA = "APP_DATA";
export const APP_PENDING = `APP_${ACTION_PENDING}`;
export const APP_READY = "APP_READY";

import userLinks from "./userLinks";
import navigationLinks from "./navigationLinks";

export const USER_LINKS = userLinks;
export const NAVIGATION_LINKS = navigationLinks;

import * as GAME_ACTIONS  from "./gameEvents";

export { GAME_ACTIONS };
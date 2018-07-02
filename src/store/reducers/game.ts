import { GameClient } from "sources";
let game;

export function reducer(state, action) {
    if (!game && GameClient) {
        game = new GameClient({});
    }

    return game;
}

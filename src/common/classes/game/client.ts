import { GAME_ACTIONS  } from "sources";
import Game from './base';

export default class Client extends Game {
    constructor(props) {
        super(props);

        this.init();
    }

    getData() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res();
            }, 2000);
        })
    }

    public async init() {
        this.status = 'pending';
        await this.getData();
        this.status = 'ready';
        this.call(GAME_ACTIONS.GAME_CLIENT_INIT);
    }
}
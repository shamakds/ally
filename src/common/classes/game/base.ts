export default class Game {
    private _status: string;
    constructor(props) {
        this.listeners = new Map;

        if (props.events) {
            Object.keys(props.events).forEach(event => this.on(event, props.events[event]));
        }
    }

    private listeners: Map<string, Function>;

    public get status() {
        return this._status;
    }
    public set status(value) {
        this._status = value;
    }

    call(event) {
        const callback = this.listeners.get(event);

        if (!callback) {
            return console.info(`NO EVENT [${event}]`);
        }

        callback();
    }
    on(event, callback) {
        this.listeners.set(event, callback);
    }
}
class Service {
    constructor() {}

    get store() {
        return JSON.parse(window.localStorage.getItem("app")) || {};
    }
    set store(data) {
        const store = Object.assign({}, this.store, data);

        window.localStorage.setItem("app", JSON.stringify(store));
    }
    getUserData() {
        return new Promise((res, rej) => {
            const data = this.store;
            setTimeout(() => {
                res(data);
            }, 1000);
        });
    }

    createGame(data) {
        return new Promise((res, rej) => {
            this.store = { game: data };

            setTimeout(() => {
                res(data);
            }, 5000);
        })
    }
}

export default new Service();
import api from './api';

class Service {
    constructor() {}

    get store() {
        return JSON.parse(window.localStorage.getItem("app")) || {};
    }
    set store(data) {
        const store = Object.assign({}, this.store, data);

        window.localStorage.setItem("app", JSON.stringify(store));
    }

    /* USER */
    getUser(id) {
        return api.get(`/users/${id}`);
    }
    addUser(user) {
        return api.post(`/users`, user);
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
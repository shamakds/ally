"use strict";

module.exports = class User {
    constructor(props) {
        Object.keys(props).forEach((key) => {
            this[key] = props[key];
        });

        this.id = Date.now();
    }
};
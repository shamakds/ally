import * as React from "react";

import "./style.css";

export default class LoaderLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section className="app-loader">
            <em className="fa fa-child fa-pulse" />
            <label>Loading, please wait...</label>
        </section>);
    }
}
import * as React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import "./style.css";

class View extends React.Component {
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

function mapStateToProps(state, props) {
    return state;
}

export default withRouter(connect(mapStateToProps)(View))
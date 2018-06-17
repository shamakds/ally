import * as React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import Navigation from "../navigation";

import "./style.css";
import { NAVIGATION_LINKS } from "../../constants";

class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Navigation links={NAVIGATION_LINKS} className="service-panel position-bottom" />);
    }
}

function mapStateToProps(state, props) {
    return state;
}

export default withRouter(connect(mapStateToProps)(View))
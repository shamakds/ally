import * as React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import { USER_LINKS } from "../../constants";
import Navigation from "../navigation";

import "./style.css";

class View extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Navigation links={USER_LINKS} className="position-top" />);
    }
}

function mapStateToProps(state, props) {
    return state;
}

export default withRouter(connect(mapStateToProps)(View))
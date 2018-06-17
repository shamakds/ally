import * as React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import CommonView from "../view";
import UserPanel from "../../components/userPanel";

import "./style.css";

class View extends CommonView {
    constructor(props) {
        super(props);
    }

    renderContent() {
        return (<section>
            <UserPanel />
        </section>);
    }
}

function mapStateToProps(state, props) {
    return state;
}

export default withRouter(connect(mapStateToProps)(View as any))
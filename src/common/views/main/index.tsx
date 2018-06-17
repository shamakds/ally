import * as React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import CommonView from "../view";
import ServicePanel from "../../components/servicePanel";
import UserPanel from "../../components/userPanel";
import Layouts from "./layouts/index";

import "./style.css";

class View extends CommonView {
    constructor(props) {
        super(props);

        this.getLayout = this.getLayout.bind(this);
    }

    getLayout() {
        const { match } = this.props;
        const layout = match ? match.params.view : "Landing";
        const Layout = Layouts[layout];

        if (!Layout) {
            return null;
        }

        return <Layout />;
    }

    renderContent() {
        return (<section>
            <UserPanel />
            <section>{this.getLayout()}</section>
            <ServicePanel />
        </section>);
    }
}

function mapStateToProps(state, props) {
    return {...state.app};
}

export default withRouter(connect(mapStateToProps)(View))
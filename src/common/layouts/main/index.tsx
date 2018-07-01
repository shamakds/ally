import * as React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { NavigationLayout } from "sources";

import './style.css';

class View extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.getLayout = this.getLayout.bind(this);
    }

    getLayout() {
        const { match } = this.props;
        const layout = (match && match.params.layout) || "Landing";

        return layout;
    }

    render() {
        return (<section className="content landing">
            <section>{this.getLayout()}</section>
            <NavigationLayout className="landing" />
        </section>);
    }
}

function mapStateToProps(state, props) {
    return {...state.app};
}

export default withRouter(connect(mapStateToProps)(View));

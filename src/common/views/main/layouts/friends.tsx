import * as React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<section>Friends</section>);
    }
}

function mapStateToProps(state, props) {
    return state;
}

export default withRouter(connect(mapStateToProps)(View))
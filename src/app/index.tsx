import * as React from 'react';
import {connect} from "react-redux";
import { Link , withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { getAppData } from "../store/actions";
import { BaseComponent } from "sources";

import './style.css';

class App extends BaseComponent<any, any> {
    props: any;
    game: any;
    constructor(props) {
        super(props);
    }

    fetchData() {
        this.props.getAppData();
    }

    renderContent() {
        return (<main>{this.props.children}</main>);
    }
}

function mapStateToProps(state, props) {
    return { ...state.app };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAppData
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
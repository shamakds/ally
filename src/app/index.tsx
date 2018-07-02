import * as React from 'react';
import { connect } from "react-redux";
import { Link , withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { getUser, authenticate } from "../store/actions";
import { BaseComponent, getAuth } from "sources";

import './style.css';

class App extends BaseComponent<any, any> {
    props: any;
    game: any;
    auth: any;

    constructor(props) {
        super(props);

        this.auth = getAuth();
        this.checkAuth = this.checkAuth.bind(this);
    }

    checkAuth() {
        if (this.auth.isAuthenticated() && !this.props.user) {
            this.auth.getProfile(this.props.authenticate)
        }
    }

    componentDidUpdate() {
        this.checkAuth();
    }

    fetchData() {
        this.checkAuth();
    }

    renderContent() {
        return (<main>
            {
                this.props.user ?
                    <a onClick={this.auth.logout}>Logout</a> :
                    <a onClick={this.auth.login}>Login</a>
            }
            { this.props.children }
        </main>);
    }
}

function mapStateToProps({ app, user}, props) {
    return { ...app, user };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUser, authenticate
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
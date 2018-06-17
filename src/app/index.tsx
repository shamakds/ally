import * as React from 'react';
import {connect} from "react-redux";
import { Link , withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { getAppData } from "../store/actions";

import LoaderView from "../common/views/loader";

import './style.css';

interface AppProps {}

class App extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        await this.props.getAppData();
    }

    render() {
        const { isPending = false } = this.props;

        return (<main>
            <section className="content">{
                isPending ? <LoaderView />
                : this.props.children
            }</section>
        </main>);
    }
}

function mapStateToProps(state, props) {
    return {...state.app};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAppData
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
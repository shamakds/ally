import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { configureStore } from './store';
import App from './app/';
import { LandingLayout,  getAuth } from 'sources';

class LogIn extends React.Component<any> {
    render() {
        return <LandingLayout />;
    }
}

const history = createBrowserHistory();

const handleAuthentication = (nextState) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        getAuth().handleAuthentication();
    }
};

// fetch('/user', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name: "Evl" })
// });

configureStore(undefined, history).then(store => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Switch>
                        <Route exact path="/login" render={(props) => {
                            handleAuthentication(props);
                            return (<LogIn history={history} />);
                        }}/>
                        <Route exact path="/" component={LandingLayout}/>
                        <Route exact={false} component={LandingLayout}/>
                    </Switch>
                </App>
            </Router>
        </Provider>,
        document.getElementById('root'),
    )
});

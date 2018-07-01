import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { configureStore } from './store';
import App from './app/';
import { LandingLayout } from 'sources';

const history = createBrowserHistory();

fetch('/user', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: "Evl" })
}).then((res) => {debugger;});


configureStore(undefined, history).then(store => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Switch>
                        <Route exact path="/:layout" component={LandingLayout}/>
                        <Route exact={false} component={LandingLayout}/>
                    </Switch>
                </App>
            </Router>
        </Provider>,
        document.getElementById('root'),
    )
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import { configureStore } from './store';
import App from './app/';
import LoaderView from './common/views/loader';
import LandingView from './common/views/main';
import GameView from './common/views/game';

const history = createBrowserHistory();
configureStore(undefined, history).then(store => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <App>
                    <Switch>
                        <Route exact path="/" component={LandingView}/>
                        <Route exact path="/home/:view" component={LandingView}/>
                        <Route path="/game/:id" component={GameView}/>
                        <Route exact={false} component={LoaderView}/>
                    </Switch>
                </App>
            </Router>
        </Provider>,
        document.getElementById('root'),
    )
});

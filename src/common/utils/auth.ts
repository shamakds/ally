import { WebAuth } from 'auth0-js';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


const config = {
    domain: 'zlodey.auth0.com',
    clientID: 'WQuLKcxHJGcOBQvBQ8dAfYpiCSgnbKR1',
    redirectUri: 'http://localhost:4000/login',
    audience: 'https://zlodey.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid email profile'
};

class Auth {
    auth0 = new WebAuth(config);
    userProfile: any;

    constructor() {
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    isAuthenticated() {
        // Check whether the current time is past the
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        // Access Token's expiry time
        return new Date().getTime() < expiresAt;
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        history.replace('/');
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        location.reload(false);
    }

    login() {
        this.auth0.authorize();
    }

    getAccessToken() {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('No Access Token found');
        }
        return accessToken;
    }

    getProfile(cb) {
        let accessToken = this.getAccessToken();
        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                this.userProfile = profile;
            }
            cb(err, profile);
        });
    }
}

function getAuth() {
    let auth;

    return () => {
        if (!auth) {
            auth = new Auth();
        }

        return auth;
    };
}

export default getAuth();

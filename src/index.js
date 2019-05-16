import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Splash } from './components/Splash'
import { Provider } from 'react-redux'
import store from './config/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { BaseLayout } from './components/BaseLayout';
import { About } from './components/About'



ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route path="/home" component={Splash} />
                <Route path="/game" component={App} />
                <Route path="/about" component={About} />

            </Switch>
        </BaseLayout>
    </BrowserRouter>
    {/* <App /> */}
</Provider>, document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA


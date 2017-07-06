import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsNew from './js/components/posts_new';
import Weather from './js/containers/weather_list';
import PostShow from './js/components/post_show';
import App from './js/components/App';
import './css/index.css';
import reducers from './js/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    	<Switch>
    		<Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostShow} />
    		<Route path="/weather" component={Weather} />
    		<Route path="/" component={App} />
    	</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  	, document.getElementById('root')
);

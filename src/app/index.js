import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App/component';
import Home from './components/Home/component';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />;
		</Route>
	</Router>
	, document.getElementById('react-root'));

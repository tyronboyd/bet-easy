import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App/component';
import Home from './components/Home/component';
import ProbeScreen from './containers/ProbeScreen/component';
import QKZ from './containers/QKZScreen/component';
import LosScreen from './containers/LosScreen/component';
import MessageCountGraph from './components/MessageCountGraph/component';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />;
			// adding this route here as there is a bug with the root path server side ref: John Luan
			<Route path="launch" component={Home} />
			<Route path="los-map" component={LosScreen} />
			<Route path="qkz/:city/:options" component={QKZ} />
			<Route path="message-count" component={MessageCountGraph} />
			<Route path="probe-map" component={ProbeScreen} >
				<Route path=":location" />
				<Route path="?nightmap=:nightmap" />
			</Route>
		</Route>
	</Router>
	, document.getElementById('react-root'));

import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
	render() {
		return (
			<div className="container home">
				Launchpad for maps
				<div>
					<ul>
						<li>
							<Link to="/probe-map">Probe map</Link>
						</li>
						<li>
							<Link to="/los-map">Los map</Link>
						</li>
						<li>
							<Link to="/message-count">Message Count Graphs</Link>
						</li>
						<li>
							<Link to="/qkz/melbourne/0">QKZ Melbourne Diagram no options</Link>
						</li>
						<li>
							<Link to="/qkz/melbourne/0,2">QKZ Melbourne Diagram with options</Link>
						</li>
						<li>
							<Link to="/qkz/sydney/0">QKZ Sydney Diagram no options</Link>
						</li>
						<li>
							<Link to="/qkz/sydney/0,2">QKZ Sydney Diagram with options</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

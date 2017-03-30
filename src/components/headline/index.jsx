import React from 'react';
import './headline.scss';

export default class HeadLine extends React.Component {
	render() {
		return (
			<header id="hero-text" className="main">
        <h5>Hazelwood is currently operating at <strong><span id="output"></span>%</strong> capacity and emitting</h5>
        <div>
          <h1><span id="emissions"></span> kg CO<sub>2</sub></h1>
          <h4>per second</h4>
        </div>
      	<h5 id="nasty"></h5>
			</header>
		)
	}
}

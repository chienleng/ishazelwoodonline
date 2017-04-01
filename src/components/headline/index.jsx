import React from 'react';
import './headline.scss';

export default class HeadLine extends React.Component {
	constructor(props) {
		super(props);
	}
	calculateEmissions(total) {
  	// intensity from ACIL Allen consulting
    return Math.round((total * 1558) / 3600);
  }
	calculateOutputPercent(total) {
		return total ? Math.round(output * 100 / 1600) : 0;
	}
	getLabel(index) {
		let nasties = this.props.nasties;
		return '…and ' + nasties[index] + ' in a typical year.';
	}
	nastiesLoop() {
		return this.getLabel(0);
	}
	render() {
		let output = this.calculateOutputPercent(this.props.total);
		let emissions = this.calculateEmissions(this.props.total);
		let nasty = this.nastiesLoop();
		return (
			<header id="hero-text" className="main">
        <h5>Hazelwood is currently operating at <strong><span id="output">{output}</span>%</strong> capacity and emitting</h5>
        <div>
          <h1><span id="emissions">{emissions}</span> kg CO<sub>2</sub></h1>
          <h4>per second</h4>
        </div>
      	<h5 id="nasty">{nasty}</h5>
			</header>
		)
	}
}

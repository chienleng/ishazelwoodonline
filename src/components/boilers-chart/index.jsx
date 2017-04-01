import React from 'react';
import moment from 'moment';
import Chart from 'chart.js';
import ChartOptions from './chart-options.js';
import ChartData from './chart-data.js';
import './boilers-chart.scss';

export default class BoilersChart extends React.Component {
	constructor(props) {
	  super(props);
		const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

		Chart.defaults.global.defaultFontFamily = 'Source Code Pro';
		Chart.defaults.global.defaultFontSize = (width <= 414 ? 8 : 12);
		Chart.defaults.global.elements.point.radius = 0;
		Chart.defaults.global.elements.line.borderWidth = 1;
		Chart.defaults.global.legend.position = 'bottom';
		Chart.defaults.global.legend.display = false;
		Chart.defaults.global.animation.duration = 500;
		Chart.defaults.global.hover.mode = 'point';
		Chart.defaults.global.hover.intersect = false;
	}
	componentDidMount() {
		let ctx = document.getElementById("boiler-chart");
		let boilerChart = new Chart(ctx, {
			type: 'line',
			data: ChartData(),
			options: ChartOptions()
		});

		this.props.data.forEach((row) => {
      var findIndex = boilerChart.config.data.labels.indexOf(moment(row[0]).valueOf());
      for (var i = 0; i<8; i++) {
        boilerChart.config.data.datasets[i].data[findIndex] = row[i+1];
      }
    });

    boilerChart.update();
	}
	render() {
		return (
			<div className="chart">
				<canvas id="boiler-chart"></canvas>
			</div>
		)
	}
}

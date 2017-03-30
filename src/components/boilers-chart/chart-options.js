export default function() {
  return {
    responsive: true,
    title: {
      display: false,
      text: 'Mega Boilers.'
    },
    tooltips: {
      mode: 'index'
    },
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
				type: 'time',
				time: {
          unit: 'day',
					displayFormats: {
            day: 'D MMM',
            minute: 'h:mma'
					},
          tooltipFormat: 'D MMM, h:mma'
				},
        scaleLabel: {
          display: false,
          labelString: 'Date'
        }
      }],
      yAxes: [{
        stacked: true,
				ticks: {
          beginAtZero: true,
					max: 1600
				},
        scaleLabel: {
          display: true,
          labelString: 'megawatts'
        }
      }]
    }
  }
}

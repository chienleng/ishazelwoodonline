Chart.defaults.global.elements.point.radius = 1;
Chart.defaults.global.elements.line.borderWidth = 1;
Chart.defaults.global.legend.position = 'bottom';

var config = {
  type: 'line',
  data: {
    labels: sampleData.labels,
    datasets: [
			{
	      label: sampleData.series[0].name,
				data: sampleData.series[0].data,
	      borderColor: window.chartColors.grey,
	      backgroundColor: window.chartColors.grey,
	    },
			{
	      label: sampleData.series[1].name,
				data: sampleData.series[1].data,
	      borderColor: window.chartColors.grey,
	      backgroundColor: window.chartColors.grey,
	    },
			{
	      label: sampleData.series[2].name,
				data: sampleData.series[2].data,
	      borderColor: window.chartColors.grey,
	      backgroundColor: window.chartColors.grey,
	    },
			{
	      label: sampleData.series[3].name,
				data: sampleData.series[3].data,
	      borderColor: window.chartColors.grey,
	      backgroundColor: window.chartColors.grey,
	    },
			{
	      label: sampleData.series[4].name,
				data: sampleData.series[4].data,
	      borderColor: window.chartColors.grey,
	      backgroundColor: window.chartColors.grey,
	    },
			{
	      label: sampleData.series[5].name,
				data: sampleData.series[5].data,
	      borderColor: window.chartColors.grey,
	      backgroundColor: window.chartColors.grey,
	    },
			{
	      label: sampleData.series[6].name,
				data: sampleData.series[6].data,
	      borderColor: window.chartColors.grey,
	      backgroundColor: window.chartColors.grey,
	    },
			{
	      label: sampleData.series[7].name,
				data: sampleData.series[7].data,
	      borderColor: window.chartColors.grey,
	      backgroundColor: window.chartColors.grey,
	    }
		]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: 'Mega Boilers.'
    },
    tooltips: {
      mode: 'index',
    },
    hover: {
      mode: 'index'
    },
    scales: {
      xAxes: [{
				type: 'time',
				time: {
					displayFormats: {
						quarter: 'MMM YYYY'
					}
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
};

function showNasties() {
  var nasties = [
    'emitting 534 kg CO^2 per second',
    'dumping 83 kg of arsenic & compounds into the air and water',
    'dumping 450 kg of mercury & compounds into the air and water',
    'dumping 150 kg of lead & compounds into the air and water',
    'dumping 4,800 kg of chlorine & compounds into the water'
  ];
  var howLong = 5000; //milliseconds
  var transitionTime = 1000;
  var showClass = 'show';
  var nastyText = document.getElementById('nasty');
  var nastyIndex = 0;
  var nastyCount = nasties.length;

  nastyText.innerHTML = nasties[nastyIndex];
  nastyText.className = showClass;
  nastyIndex++;

  setInterval(function() {
    nastyText.className = '';

    setTimeout(function() {
      nastyText.innerHTML = nasties[nastyIndex];
      nastyText.className = showClass;
      nastyIndex++;
      if (nastyIndex === nastyCount) {
        nastyIndex = 0;
      }
    }, transitionTime)
  }, howLong);
}
window.onload = function() {
  var ctx = document.getElementById('canvas').getContext('2d');
  window.myLine = new Chart(ctx, config);

  showNasties();
};

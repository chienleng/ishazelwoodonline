var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
      text: "Mega Boilers."
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

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myLine = new Chart(ctx, config);
};

// document.getElementById('randomizeData').addEventListener('click', function() {
//   config.data.datasets.forEach(function(dataset) {
//     dataset.data = dataset.data.map(function() {
//       return randomScalingFactor();
//     });
//   });
//
//   window.myLine.update();
// });
//
// var colorNames = Object.keys(window.chartColors);
// document.getElementById('addDataset').addEventListener('click', function() {
//   var colorName = colorNames[config.data.datasets.length % colorNames.length];
//   var newColor = window.chartColors[colorName];
//   var newDataset = {
//     label: 'Dataset ' + config.data.datasets.length,
//     borderColor: newColor,
//     backgroundColor: newColor,
//     data: [],
//   };
//
//   for (var index = 0; index < config.data.labels.length; ++index) {
//     newDataset.data.push(randomScalingFactor());
//   }
//
//   config.data.datasets.push(newDataset);
//   window.myLine.update();
// });
//
// document.getElementById('addData').addEventListener('click', function() {
//   if (config.data.datasets.length > 0) {
// 	  var month = MONTHS[config.data.labels.length % MONTHS.length];
// 	  config.data.labels.push(month);
//
// 	  config.data.datasets.forEach(function(dataset) {
// 	     dataset.data.push(randomScalingFactor());
// 	  });
//
// 	  window.myLine.update();
//   }
// });
//
// document.getElementById('removeDataset').addEventListener('click', function() {
//   config.data.datasets.splice(0, 1);
//   window.myLine.update();
// });
//
// document.getElementById('removeData').addEventListener('click', function() {
//   config.data.labels.splice(-1, 1); // remove the label first
//
//   config.data.datasets.forEach(function(dataset, datasetIndex) {
//     dataset.data.pop();
//   });
//
//   window.myLine.update();
// });

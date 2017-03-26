/* global Chart */

'use strict';

window.chartColors = {
	red: 'rgba(255, 99, 132, 0.5)',
	orange: 'rgba(255, 159, 64, 0.5)',
	yellow: 'rgba(255, 205, 86, 0.5)',
	green: 'rgba(75, 192, 192, 0.5)',
	blue: 'rgba(54, 162, 235, 0.5)',
	purple: 'rgba(153, 102, 255, 0.5)',
	grey: 'rgba(201, 203, 207, 0.2)'
};

window.greyColors = {
	grey1: 'rgb(227, 227, 227)',
	grey2: 'rgb(213, 213, 213)',
	grey3: 'rgb(198, 198, 198)',
	grey4: 'rgb(181, 181, 181)',
	grey5: 'rgb(165, 165, 165)',
	grey6: 'rgb(143, 143, 143)',
	grey7: 'rgb(125, 125, 125)',
	grey8: 'rgb(104, 104, 104)'
};

window.randomScalingFactor = function() {
	// return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 1600);
	return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 1600);
};

// var csv is the CSV file with headers
function csvJSON(csv) {
  var lines = csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length;i++){
      var obj = {};
      var currentline=lines[i].split(",");
      for(var j=0;j<headers.length;j++){
        obj[j] = currentline[j];
      }
      result.push(obj);
  }
  return result; //JavaScript object
  // return JSON.stringify(result); //JSON
}

(function(global) {
	var Months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	var Samples = global.Samples || (global.Samples = {});
	Samples.utils = {
		// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
		srand: function(seed) {
			this._seed = seed;
		},

		rand: function(min, max) {
			var seed = this._seed;
			min = min === undefined? 0 : min;
			max = max === undefined? 1 : max;
			this._seed = (seed * 9301 + 49297) % 233280;
			return min + (this._seed / 233280) * (max - min);
		},

		numbers: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 1;
			var from = cfg.from || [];
			var count = cfg.count || 8;
			var decimals = cfg.decimals || 8;
			var continuity = cfg.continuity || 1;
			var dfactor = Math.pow(10, decimals) || 0;
			var data = [];
			var i, value;

			for (i=0; i<count; ++i) {
				value = (from[i] || 0) + this.rand(min, max);
				if (this.rand() <= continuity) {
					data.push(Math.round(dfactor * value) / dfactor);
				} else {
					data.push(null);
				}
			}

			return data;
		},

		labels: function(config) {
			var cfg = config || {};
			var min = cfg.min || 0;
			var max = cfg.max || 100;
			var count = cfg.count || 8;
			var step = (max-min) / count;
			var decimals = cfg.decimals || 8;
			var dfactor = Math.pow(10, decimals) || 0;
			var prefix = cfg.prefix || '';
			var values = [];
			var i;

			for (i=min; i<max; i+=step) {
				values.push(prefix + Math.round(dfactor * i) / dfactor);
			}

			return values;
		},

		months: function(config) {
			var cfg = config || {};
			var count = cfg.count || 12;
			var section = cfg.section;
			var values = [];
			var i, value;

			for (i=0; i<count; ++i) {
				value = Months[Math.ceil(i)%12];
				values.push(value.substring(0, section));
			}

			return values;
		},

		transparentize: function(color, opacity) {
			var alpha = opacity === undefined? 0.5 : 1 - opacity;
			return Chart.helpers.color(color).alpha(alpha).rgbString();
		},

		merge: Chart.helpers.configMerge
	};

	Samples.utils.srand(Date.now());

}(this));

import moment from 'moment';

export default function() {
  let greyColors = {
  	grey1: 'rgb(104, 104, 104)',
  	grey2: 'rgb(125, 125, 125)',
  	grey3: 'rgb(143, 143, 143)',
  	grey4: 'rgb(165, 165, 165)',
  	grey5: 'rgb(181, 181, 181)',
  	grey6: 'rgb(198, 198, 198)',
  	grey7: 'rgb(213, 213, 213)',
  	grey8: 'rgb(227, 227, 227)'
  };
  let chartData = {
    labels: [],
    datasets: [
      {label: 'Boiler 1', data: [], borderColor: greyColors.grey1, backgroundColor: greyColors.grey1},
      {label: 'Boiler 2', data: [], borderColor: greyColors.grey2, backgroundColor: greyColors.grey2},
      {label: 'Boiler 3', data: [], borderColor: greyColors.grey3, backgroundColor: greyColors.grey3},
      {label: 'Boiler 4', data: [], borderColor: greyColors.grey4, backgroundColor: greyColors.grey4},
      {label: 'Boiler 5', data: [], borderColor: greyColors.grey5, backgroundColor: greyColors.grey5},
      {label: 'Boiler 6', data: [], borderColor: greyColors.grey6, backgroundColor: greyColors.grey6},
      {label: 'Boiler 7', data: [], borderColor: greyColors.grey7, backgroundColor: greyColors.grey7},
      {label: 'Boiler 8', data: [], borderColor: greyColors.grey8, backgroundColor: greyColors.grey8},
    ]
  };
  let s = moment('2017-03-25 00:00').valueOf();
  let e = moment('2017-03-29 24:00').valueOf();

  while (s <= e) {
    chartData.labels.push(moment(s).valueOf());
    chartData.datasets.forEach(function(dataset) {
      dataset.data.push(0);
    });
    s = s + 300000; // add 5 mins
  }
  chartData.labels.push(moment(e));
  return chartData;
}

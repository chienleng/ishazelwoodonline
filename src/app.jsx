import React from 'react';

import HeadLine from './components/headline/index.jsx';
import BoilersChart from './components/boilers-chart/index.jsx';
import FutureSuper from './components/future-super/index.jsx';
import FAQs from './components/faqs/index.jsx';
import Credits from './components/credits/index.jsx';
import BoilersData from './hazelwood-boilers.json';
import NastiesData from './hazelwood-nasties.json';

import '../styles/index.scss';

export default class App extends React.Component {
  calculateTotal() {
    const bData = BoilersData.data
		let total = 0;
    // let firstRow = bData[0];
		let lastRow = bData[bData.length-1];
		for (let i=0; i<8; i++) {
			total += parseFloat(lastRow[i+1]);
		}
    return total;
  }
  render() {
    return (
      <div>
        <img src="hazelwood.jpg" className="station2" />
        <div className="content">
          <HeadLine total={this.calculateTotal()} nasties={NastiesData}/>
          <BoilersChart data={BoilersData.data}/>
          <FutureSuper/>
          <FAQs/>
          <Credits/>
        </div>
      </div>
    )
  }
}

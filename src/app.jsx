import React from 'react';
import HeadLine from './components/headline/index.jsx';
import BoilersChart from './components/boilers-chart/index.jsx';
import FutureSuper from './components/future-super/index.jsx';
import FAQs from './components/faqs/index.jsx';
import Credits from './components/credits/index.jsx';
import '../styles/index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <img src="hazelwood.jpg" className="station2" />
        <div className="content">
          <HeadLine/>
          <BoilersChart/>
          <FutureSuper/>
          <FAQs/>
          <Credits/>
        </div>
      </div>
    )
  }
}

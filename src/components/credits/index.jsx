import React from 'react';
import './credits.scss';

export default class Credits extends React.Component {
	render() {
		return (
			<footer>
				<hr/>
        <p>
          <small>photo by </small><br/>
          <a href="https://www.flickr.com/photos/tracydeichmann/14870722931/">tracy deichmann</a>
        </p>
        <p>
          <small>designed by </small><br/>
            <a href="https://www.linkedin.com/in/simonhac/">simonhac</a> &amp; <a href="https://twitter.com/chienleng">@chienleng</a><br/>
          <small>melbourne, australia</small>
        </p>
      </footer>
		)
	}
}

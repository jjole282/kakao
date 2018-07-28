import React, { Component } from 'react';
import Navi from './presenter';

class Container extends Component {
	render() {
		console.log('navi container', this.props);
		return <Navi {...this.props} />;
	}
}

export default Container;

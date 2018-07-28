import React, { Component } from 'react';
import Login from './presenter';

class Container extends Component {
	render() {
		return <Login {...this.props} />;
	}
}

export default Container;

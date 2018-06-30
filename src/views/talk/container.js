import React, { Component } from 'react';
import Talk from './presenter';

class Container extends Component {
	render() {
		return (
			<Talk {...this.state} {...this.props} /> // friendlist에서의 state값, props를 가져오게
		);
	}
}

export default Container;

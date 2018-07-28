import React, { Component } from 'react';
import App from './presenter';

class Container extends Component {
	state = {
		//state 객체만들기.리액트에서 기본적으로 제공하는걸 쓸때는, render 밖의 위에 넣는다.
		viewActive: 'navlist01',
		LogActive: false,
	};
	render() {
		const { LogActive } = this.state;
		const { viewActive } = this.state;
		return (
			<App
				LogActive={LogActive}
				viewActive={viewActive}
				clickOk={this._viewActive}
				handleActive={this._LogActive}
			/>
		);
	}
	_viewActive = view => {
		this.setState({
			viewActive: view,
		});
	};

	_LogActive = log => {
		this.setState({
			LogActive: log,
		});
	};
}

export default Container;

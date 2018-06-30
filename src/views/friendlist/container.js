import React, { Component } from 'react';
import Friendlist from './presenter';

class Container extends Component {
	state = {
		//state 객체만들기.리액트에서 기본적으로 제공하는걸 쓸때는, render 밖의 위에 넣는다.
		chatActive: false,
	};
	render() {
		const { chatActive } = this.state;
		return (
			<Friendlist chatActive={chatActive} handleOpen={this._handleOpen} handleClose={this._handleClose} /> // chatActive=,handleOpen=는 만든 attr. attr명은 직접 지을수있음.
		);
	}
	_handleOpen = () => {
		this.setState({
			chatActive: true,
		});

		console.log(this.state);
	};

	_handleClose = () => {
		this.setState({
			chatActive: false,
		});

		console.log(this.state);
	};
}

export default Container;

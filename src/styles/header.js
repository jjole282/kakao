import React from 'react';
import styled from 'styled-components';
import Nav from 'components/navi';

const Header = styled.header`
	padding: 15px;
	background: #423630;
	& h1 {
		margin-bottom: 10px;
		font-size: 14px;
		color: #fff;
	}
`;

const Headerbox = props => {
	console.log(props);
	return (
		<Header>
			<h1>Kakaotalk</h1>
			{/* <Nav handleOpen={this._handleOpen} handleClose={this._handleClose} /> */}
			<Nav {...props} />
		</Header>
	);
};

export default Headerbox;

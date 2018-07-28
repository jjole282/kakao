import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InputText from 'views/login/form/inputText';
import InputPass from 'views/login/form/inputPass';
import Button from 'styles/button';
import Checkbox from 'views/login/form/checkbox';
import Menu from 'views/login/menu';

const Loginwrap = styled.div`
	display: table;
	position: relative;
	width: 100%;
	height: 100vh;
	background: #ffeb33;
`;
const Logininner = styled.div`
	display: table-cell;
	vertical-align: middle;
	padding: 0 50px;
`;

const Loginlogo = styled.h1`
	display: block;
	margin-bottom: 40px;
	text-align: center;
	& a {
		display: inline-block;
		width: 100px;
		text-align: center;
	}
	& img {
		width: 100px;
		height: auto;
	}
`;

const Loginbox = props => {
	// state less 방식

	const { handleActive } = props;

	return (
		<Loginwrap>
			<Logininner>
				<Loginlogo>
					<a>
						<img src={require('../../images/logo.jpg')} alt="TALK" />
					</a>
				</Loginlogo>
				<InputText />
				<InputPass />
				{/* <Link to="/friendlist">
					<Button />
				</Link> */}
				<Button type="button" onClick={() => handleActive(true)}>
					로그인
				</Button>
				<Checkbox />
				{/* <Link to="/join"><span>회원가입</span></Link> */}
				<a href="#none" {...props}>
					<span>회원가입</span>
				</a>
			</Logininner>
			<Menu />
		</Loginwrap>
	);
};

export default Loginbox;

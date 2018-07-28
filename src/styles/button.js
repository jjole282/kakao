import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
	width: 100%;
	background: #423630;
	color: #fff;
	text-align: center;
	padding: 10px;
	margin-top: 10px;
`;

const Button = props => {
	const { children } = props;
	// state less 방식
	return <Buttons {...props}>{children}</Buttons>;
};

export default Button;

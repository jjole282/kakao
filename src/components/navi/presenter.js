import React from 'react';
//import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'images/ic_top.png';
import Friendlist from '../../views/friendlist';
import Talk from '../../views/talk';

const Navi = styled.ul`
	width: 100%;
	overflow: hidden;
	margin: 0;
	& li {
		margin: 0;
		padding: 0;
		float: left;
		list-style: none;
		margin-left: 10px;
		& a {
			display: block;
			width: 34px;
			padding-top: 36px;
			height: 0;
			font-size: 0;
			line-height: 0;
			background-image: url(${Button});
			background-size: 67px 108px;
		}
	}
	& li:first-child {
		margin-left: 0;
	}
	& li:first-child a {
		background-position: 0 0;
	}
	& li:first-child + li a {
		background-position: 0 -144px;
	}
	& li:first-child + li + li a {
		background-position: 0 -72px;
	}
`;

const Nav = props => {
	// state less 방식
	console.log(props);
	const { viewActive, clickOk } = props;
	return (
		<Navi>
			<li onClick={() => clickOk('navlist01')} style={viewActive === 'navlist01' ? { color: 'white' } : null}>
				친구리스트
			</li>
			<li onClick={() => clickOk('navlist02')} style={viewActive === 'navlist02' ? { color: 'white' } : null}>
				대화리스트
			</li>
			<li>메뉴더보기</li>

			{/* <li><Link to="/kakao">친구리스트</Link></li>
            <li><Link to="/friendlist">대화리스트</Link></li>
            <li><Link to="/friendlist">메뉴더보기</Link></li> */}
		</Navi>
	);
};

export default Nav;

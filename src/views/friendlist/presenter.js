import React from 'react';
import styled from 'styled-components';
import Userinfo from 'components/userinfo/';
import Searchname from 'components/searchbox/';
import Talk from 'views/talk/';

const FriendWrap = styled.div`
	width: 100%;
`;

const FriendlistBox = styled.div`
	padding: 10px 0;
	& h2 {
		margin: 0;
		padding: 15px;
		color: #7f7f7f;
		font-size: 14px;
		font-weight: normal;
		border-bottom: 1px solid #e6e6e6;
	}
`;

const Friend = styled.ul`
	padding: 0;
	margin: 0;
	& li {
		padding: 15px;
		margin: 0;
		list-style: none;
		border-bottom: 1px solid #e6e6e6;
		& a {
			display: flex;
			align-items: center;
			width: 100%;
			overflow: hidden;
		}
	}
`;

const Message = styled.div`
	float: right;
	width: 20%;
	min-height: 40px;
	display: flex;
	display: -webkit-flex;
	-webkit-align-items: center;
	align-items: center;
	-webkit-justify-content: center;
	justify-content: center;
	color: #7f7f7f;
`;

const Friendlist = props => {
	// state less 방식
	const { handleOpen, handleClose, chatActive } = props;
	return (
		<FriendWrap>
			<React.Fragment>
				<Searchname />
				<FriendlistBox>
					<h2>내 프로필</h2>
					<Friend>
						<li onClick={handleOpen}>
							<a href="#none">
								<Userinfo />
								<Message>카톡 만들기 시작</Message>
							</a>
						</li>
					</Friend>
				</FriendlistBox>
				{chatActive ? <Talk handleClose={handleClose} /> : null}
			</React.Fragment>
		</FriendWrap>
	);
};

export default Friendlist;

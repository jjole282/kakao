import React from 'react';
import styled from 'styled-components';

const Talkwrap = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: #21232f;
	height: 100vh;
`;
const Top = styled.div`
	boreder-bottom: 1px solid #1f212d;
	padding: 10px;
	& a {
		display: block;
		position: absolute;
		top: 10px;
		left: 10px;
		width: 20px;
		height: 26px;
	}
	& img {
		width: 100%;
		height: auto;
	}
	& span {
		display: block;
		line-height: 26px;
		color: #fff;
		text-align: center;
	}
`;
const Frilist = styled.div`
	padding: 10px;
	margin: 0;
`;

const ThumbWrap = styled.div`
	position: relative;
`;

const Thumb = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	margin-top: -20px;
	width: 40px;
	height: 40px;
	& img {
		width: 100%;
		height: auto;
	}
	& a {
		display: block;
	}
`;
const Talkinfo = styled.div`
	padding-left: 55px;
	font-weight: bold;
	height: 40px;
	& span {
		font-weight: bold;
	}
	& p {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		-webkit-box-orient: vertical;
		color: #737373;
		font-weight: normal;
		vertical-align: middle;
	}
`;

const Messagewrap = styled.ul`
	position: relative;
	& li {
		width: 100%;
		overflow: hidden;
		margin-top: 5px;
	}
`;

const Message01 = styled.div`
	display: inline-block;
	padding: 10px;
	-webkit-border-radius: 30px;
	border-radius: 30px;
	float: left;
	background: #403f56;
	color: #fff;
`;

const Message02 = styled.div`
	display: inline-block;
	padding: 10px;
	-webkit-border-radius: 30px;
	border-radius: 30px;
	float: right;
	background: #e5c0ff;
	color: #221d26;
`;

const Talk = props => {
	// state less 방식
	return (
		<Talkwrap>
			<Top>
				<a href="#none" onClick={props.handleClose}>
					<img src={require('../../images/ic_back.jpg')} alt="뒤로가기" />
				</a>
				<span>써니</span>
			</Top>
			<Frilist>
				<ThumbWrap>
					<Thumb>
						<a href="#none">
							<img src={require('../../images/img01.png')} alt="프로필 이미지" />
						</a>
					</Thumb>
					<Talkinfo>
						<span>써니</span>
					</Talkinfo>
					<Messagewrap>
						<li>
							<Message01>나는 오전 7시쯤</Message01>
						</li>
						<li>
							<Message01>
								오빠는 일끝나구~<br />근데 일이 언제 끝날지 몰라
							</Message01>
						</li>
					</Messagewrap>
				</ThumbWrap>
				<ThumbWrap>
					<Messagewrap>
						<li>
							<Message02>아 올라오자마자 울집으로</Message02>
						</li>
					</Messagewrap>
				</ThumbWrap>
			</Frilist>
		</Talkwrap>
	);
};

export default Talk;

import React from "react";
import styled from "styled-components";
import Button from "images/ic_top.png";
import Spicon from "images/sp_icon.png";

const Spriteicon = styled.span`
    display: inline-block;
    background: url(${Spicon});
    background-size: 100px 250px;
`

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #fff;

`
const Header = styled.div`
    background-color: #423630;
    & h1 {
        font-size: 14px;
        color: #fff;
        padding: 20px;
    }
`

const Topmn = styled.ul`
    width: 100%;
    overflow: hidden;
    padding: 0 10px 10px;
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
`

const Middle = styled.div`
    width: 100%;
`

const SearchName = styled.div`
    position: relative;
    width: 100%;
    padding: 15px 15px 15px 40px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
    & input {
        color: #999;
        padding: 0;
        margin: 0;
        border: 0 none;
        width: 100%;
    }
    & ${Spriteicon} {
        width: 14px;
        height: 14px;
        background-position: -35px 0;
        position: absolute;
        top: 0;
        left: 0;
        & ::before {

        }
    }
`

const FriendWrap = styled.div`
    width: 100%;
`

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
`

const Friendlist = styled.ul`
    padding: 0;
    margin: 0;
    & li {
        padding: 15px;
        margin: 0;
        list-style: none;
        border-bottom: 1px solid #e6e6e6;
        & a {
            display: block;
            width: 100%;
            overflow: hidden;
        }
    }
`

const ThumbWrap = styled.div`
    float: left;
    width: 50%;
    position: relative;
    min-height: 40px;
`

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
`

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
`

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
`




const Kakao = (props) => { // state less 방식
    return(
        <Wrapper>
            <Middle>
                <SearchName>
                    <Spriteicon></Spriteicon>
                    <input type="text" placeholder="이름검색" />
                </SearchName>
                <FriendWrap>
                    <FriendlistBox>
                        <h2>내 프로필</h2>
                        <Friendlist>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>카톡 만들기 시작</Message>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>떡실신</Message>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>카톡 만들기 시작</Message>
                                </a>
                            </li>
                        </Friendlist>
                    </FriendlistBox>
                    <FriendlistBox>
                        <h2>새로운 친구</h2>
                        <Friendlist>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>카톡 만들기 시작</Message>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>카톡 만들기 시작</Message>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>카톡 만들기 시작</Message>
                                </a>
                            </li>
                        </Friendlist>
                    </FriendlistBox>
                    <FriendlistBox>
                        <h2>친구 104</h2>
                        <Friendlist>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>카톡 만들기 시작</Message>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>카톡 만들기 시작</Message>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>카톡 만들기 시작</Message>
                                </a>
                            </li>
                        </Friendlist>
                    </FriendlistBox>
                </FriendWrap>
            </Middle>

            <Middle>
                <SearchName>
                    <Spriteicon></Spriteicon>
                    <input type="text" placeholder="채팅방 이름, 참여자 검색" />
                </SearchName>
                <FriendWrap>
                    <FriendlistBox>
                        <Friendlist>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                            <p>허리가 너무 아픈데 야근하냐고 못갔네 오늘ㅠ.ㅠ</p>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>오후 10:31</Message>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                            <p>띠로리</p>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>오전 8:10</Message>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <ThumbWrap>
                                        <Thumb>
                                            <img src={require("../../images/img01.png")} alt="프로필 이미지" />
                                        </Thumb>
                                        <Talkinfo>
                                            <span>김선영</span>
                                            <p>띠로리</p>
                                        </Talkinfo>
                                    </ThumbWrap>
                                    <Message>어제</Message>
                                </a>
                            </li>
                        </Friendlist>
                    </FriendlistBox>
                </FriendWrap>
            </Middle>
        </Wrapper>
    )
}




export default Kakao;
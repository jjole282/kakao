import React from "react";
import styled from "styled-components";


const ThumbWrap = styled.div`
    display: flex;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 55px;
    font-weight: bold;
    height: 40px;
    text-align: left;
    & span {
        font-weight: bold;
        display: -webkit-box;
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



const Userinfo = (props) => { // state less 방식
    return(
        
        <ThumbWrap>
            <Thumb>
                <img src={require("../../images/img01.png")} alt="프로필 이미지" />
            </Thumb>
            <Talkinfo>
                <span>박시원</span>
                <p>책상과 의자가 절실히 필요하다 내 허리 돌리도 뜨아아악</p>
            </Talkinfo>
        </ThumbWrap>
    )
}




export default Userinfo;
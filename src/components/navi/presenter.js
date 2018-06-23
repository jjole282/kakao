import React from "react";
import styled from "styled-components";
import Button from "../../images/ic_top.png";


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
`


const Nav = (props) => { // state less 방식
    return(
        <Navi>
            <li><a href="#none">친구리스트</a></li>
            <li><a href="#none">대화리스트</a></li>
            <li><a href="#none">메뉴더보기</a></li>
        </Navi>
    )
}




export default Nav;
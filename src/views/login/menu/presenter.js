import React from "react";
import styled from "styled-components";


const Menu = styled.ul`
    width: 100%;
    position: absolute;
    bottom: 40px;
    left: 0;
    text-align: center;
    & li {
        display: inline-block;
        position: relative;
    }
    & li:after { 
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -6px;
        width: 1px;
        height: 12px;
        background: #e5d32e;
     }
    & li:first-child:after { 
        display: none;
     }
    & a { 
        display: block;
        padding: 0 10px;
        color: #7f7519;
    } 
`


const Loginmenu = (props) => { // state less 방식
    return(
        <Menu>
            <li><a href="#none">카카오계정 찾기</a></li>
            <li><a href="#none">비밀번호 재설정</a></li>
        </Menu>
    )
}




export default Loginmenu;
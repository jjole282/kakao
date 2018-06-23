import React from "react";
import styled from "styled-components";
import Spicon from "../../images/sp_icon.png";

const Spriteicon = styled.span`
    display: inline-block;
    background: url(${Spicon});
    background-size: 100px 250px;
`


const Search = styled.div`
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
        top: 50%;
        left: 15px;
        margin-top: -7px;
        & ::before {

        }
    }
`


const Searchname = (props) => { // state less 방식
    return(
        <Search>
            <Spriteicon></Spriteicon>
            <input type="text" placeholder="이름검색" />
        </Search>
    )
}




export default Searchname;
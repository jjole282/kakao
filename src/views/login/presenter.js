import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputText from "./form/inputText/presenter";
import InputPass from "./form/inputPass/presenter";
import Button from "./form/button/presenter";
import Checkbox from "./form/checkbox/presenter";
import Menu from "./menu/presenter";


const Loginwrap = styled.div`
    display: table;
    position: relative;
    width: 100%;
    height: 100vh;
    background: #ffeb33;
`
const Logininner = styled.div`
    display: table-cell;
    vertical-align: middle;
    padding: 0 50px;
`

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
`


const Loginbox = (props) => { // state less 방식
    return(
        <Loginwrap>
            <Logininner>
                <Loginlogo>
                    <a>
                        <img src={require("../../images/logo.jpg")} alt="TALK" />
                    </a>
                </Loginlogo>
                <InputText />
                <InputPass />
                <Button />
                <Checkbox />
                <Link to="/join"><span>회원가입</span></Link>
            </Logininner>
            <Menu />
        </Loginwrap>
    )
}




export default Loginbox;
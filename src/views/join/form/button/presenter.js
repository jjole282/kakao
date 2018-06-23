import React from "react";
import styled from "styled-components";

const Buttonwrap = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
`

const Buttons = styled.button`
    width: ${props => props.width > 70 ? (props.width + "px") : ("50px") };
    background: #423630;
    color: #fff;
    text-align: center;
    padding: 10px;
`
const Button02 = styled.button`
    width: 50%;
    background: #7b736f;
    color: #fff;
    text-align: center;
    padding: 10px;
`


const Button = (props) => { // state less 방식
    const { children } = props;
    return(
            <Buttons width={props.width}>{children}</Buttons>
    )
}




export default Button;
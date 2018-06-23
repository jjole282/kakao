import React from "react";
import styled from "styled-components";


const Button01 = styled.button`
    width: 100%;
    background: #423630;
    color: #fff;
    text-align: center;
    padding: 10px;
    margin-top: 10px;
`


const Button = (props) => { // state less 방식
    return(
        <Button01>로그인</Button01>
    )
}




export default Button;
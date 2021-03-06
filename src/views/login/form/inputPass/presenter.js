import React from "react";
import styled from "styled-components";


const InputTxtwrap = styled.div`
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #f1f1f1;
    background: #fff;
    & input {
        width: 100%;
        border: 0 none;
        padding: 5px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`


const InputPass01 = (props) => { // state less 방식
    return(
        <InputTxtwrap>
            <input type="password" />
        </InputTxtwrap>
    )
}




export default InputPass01;
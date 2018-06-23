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


const InputTxt01 = (props) => { // state less 방식
    return(
        <InputTxtwrap>
            <input type="text" placeholder="카카오계정 (이메일 또는 전화번호)" />
        </InputTxtwrap>
    )
}




export default InputTxt01;
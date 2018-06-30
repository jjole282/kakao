import React from "react";
import styled from "styled-components";


const Checkbox = styled.ul`
    width: 100%;
    margin-top: 10px;
    color: #7f7519;
    & label {
        margin-left: 5px;
    }
`


const Checkbox01 = (props) => { // state less 방식
    return(
        <Checkbox>
            <input type="checkbox" id="chk01" />
            <label htmlFor="chk01">잠금모드로 자동로그인</label>
        </Checkbox>
    )
}




export default Checkbox01;
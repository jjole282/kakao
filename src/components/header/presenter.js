import React from "react";
import styled from "styled-components";
import Nav from "../navi/presenter";

const Header = styled.header`
    padding: 15px;
    background: #423630;
    & h1 {
        margin-bottom: 10px;
        font-size: 14px;
        color: #fff;
    }
`

const Headerbox = (props) => { // state less 방식
    return(
        <Header>
             <h1>Kakaotalk</h1>
            <Nav />
        </Header>
    )
}




export default Headerbox;
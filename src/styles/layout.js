import React from "react";
import styled from "styled-components";
import Header from "components/header/presenter";

const Layout = styled.div`
    width: 100%;
`


const LayoutStyle = (props) => {
   const { children } = props; //const children = props.children;와 같음. App.js의 Layout안의 자식들을 props매개변수로 가져옴.
    return(
        <Layout>
            <Header />
            {children}
        </Layout>
    )
}



export default LayoutStyle;
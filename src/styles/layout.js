import React from 'react';
import styled from 'styled-components';
import Header from 'styles/header';
import Contents from 'styles/contents';

const Layout = styled.div`
	width: 100%;
`;

const LayoutStyle = props => {
	const { children } = props; //const children = props.children;와 같음. App.js의 Layout안의 자식들을 props매개변수로 가져옴.
	console.log('layout의 props는' + props);
	return (
		<Layout {...props}>
			<Header {...props} />
			<Contents {...props} />
		</Layout>
	);
};

export default LayoutStyle;

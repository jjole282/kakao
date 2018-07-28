import React from 'react';
import styled from 'styled-components';
import Friendlist from 'views/friendlist';
import Kakao from 'views/kakao';
import Talk from 'views/talk';

const Contents = styled.div`
	width: 100%;
`;

const Contentswrap = props => {
	// state less 방식
	console.log(props);
	const { viewActive } = props;
	return (
		<Contents>
			{viewActive === 'navlist01' ? <Friendlist /> : null}
			{viewActive === 'navlist02' ? <Kakao /> : null}
		</Contents>
	);
};

export default Contentswrap;

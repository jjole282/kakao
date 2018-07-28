//import React, { Component } from 'react'; // Component 는 리액트안에서 컴포넌트를 쓰겠다는 의미.=> class
import React, { Fragment } from 'react'; // Component 는 리액트안에서 컴포넌트를 쓰겠다는 의미.=> class
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'styles/layout';
import Login from 'views/login';
// import Login from "views/login/";
// import Join from "views/join/";
// import Kakao from "views/kakao/";
// import Friendlist from "views/friendlist/";

const App = props => {
	// state less 방식
	console.log(props);

	const { LogActive } = props;

	return <Fragment>{LogActive === false ? <Login {...props} /> : <Layout {...props} />}</Fragment>;
	// <BrowserRouter>
	//   <Layout>
	//     <Switch>
	//       <Route exact path="/" component={Login} />
	//       <Route exact path="/join" component={Join} />
	//       <Route exact path="/friendlist" component={Friendlist} />
	//       <Route exact path="/kakao" component={Kakao} />
	//     </Switch>
	//   </Layout>
	// </BrowserRouter>
};

export default App;

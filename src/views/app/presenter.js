import React, { Component } from "react";// Component 는 리액트안에서 컴포넌트를 쓰겠다는 의미.=> class
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../login/presenter";
import Join from "../join/presenter";


const App = (props) => { // state less 방식
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/join" component={Join} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

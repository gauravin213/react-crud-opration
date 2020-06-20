import React, { Component } from "react";
import { Redirect } from "react-router-dom";
function Protected(props) {
  //const pp_token = localStorage.getItem("auth_success_token");
  const pp_token = props.isLogedIn;
  return <div>{pp_token ? <props.component /> : <Redirect to="login" />}</div>;
}

export default Protected;

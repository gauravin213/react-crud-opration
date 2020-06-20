import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";
import { generate_endpoint } from "../../services/UserServices";

const UserLogin = (props) => {
  const onAuthHandle = props.onAuthHandle;

  const login_url = generate_endpoint;

  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const result = axios.post(login_url, user);
    result.then((result) => {
      const auth_success_token = result.data.success.token;
      console.log(auth_success_token);
      localStorage.setItem("auth_success_token", auth_success_token);
      /*console.log("-----------------------------");
      console.log(result.data);
      console.log("-----------------------------");*/
      onAuthHandle(1);
      history.push("/");
    });
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Login </h1>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;

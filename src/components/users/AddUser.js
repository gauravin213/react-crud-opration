import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { site_url_endpoint } from "../../services/UserServices";
const AddUser = () => {
  const pp_token = localStorage.getItem("auth_success_token");
  /*
   * Working method 3
   */
  const axios_instance = axios.create({
    baseURL: site_url_endpoint,
    headers: { Authorization: "Bearer " + pp_token },
  });
  //const result = axios_instance.get("/articles");
  /*
   * Working method 3
   */

  let history = useHistory();
  const [user, setUser] = useState({
    title: "",
    body: "",
  });
  const { title, body } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //await axios.post("http://127.0.0.1/laravelblog/api/articles", user);
    //axios.post("http://127.0.0.1:8000/api/articles", user);
    axios_instance.post("/articles", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Add User</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input
              type="text"
              className="form-control"
              name="body"
              value={body}
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

export default AddUser;

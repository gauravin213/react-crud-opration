import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";
import { site_url_endpoint } from "../../services/UserServices";
const User = () => {
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

  const { id } = useParams();
  const [user, setUser] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    /*const result = await axios.get(
      `http://127.0.0.1/laravelblog/api/articles/${id}`
    );
    setUser(result.data);
    console.log(result);*/
    //const result = axios.get("http://127.0.0.1:8000/api/articles/" + id);
    const result = axios_instance.get("/articles/" + id);
    result.then((result) => {
      setUser(result.data);
    });
  };
  return (
    <div className="container py-4">
      <div className="py-4">
        <h1>View User</h1>
      </div>
      <Link className="btn btn-primary mr-2" to="/">
        Go Back
      </Link>
      <h1 className="display-4">User: {user.id}</h1>
      <ul className="list-group q-50">
        <li className="list-group-item">Title: {user.title}</li>
        <li className="list-group-item">Body: {user.body}</li>
      </ul>
    </div>
  );
};

export default User;

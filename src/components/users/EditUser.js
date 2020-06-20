import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { site_url_endpoint } from "../../services/UserServices";
const EditUser = () => {
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
  const { id } = useParams();

  const [user, setUser] = useState({
    title: "",
    body: "",
  });
  const { title, body } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    //await axios.put(`http://127.0.0.1/laravelblog/api/articles/${id}`, user);
    //axios.put("http://127.0.0.1:8000/api/articles/" + id, user);
    axios_instance.put("/articles/" + id, user);
    history.push("/");
  };

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
    <div className="container">
      <div className="py-4">
        <h1>Edit User</h1>
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
          <button type="submit" className="btn btn-warning btn-block">
            Updare User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

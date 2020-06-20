import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { site_url_endpoint } from "../../services/UserServices";
const Home = () => {
  const [users, setUser] = useState([]);

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

  useEffect(() => {
    loadUers();
  }, []);

  const loadUers = async () => {
    /*const result = await axios.get("http://127.0.0.1/laravelblog/api/articles");
    setUser(result.data.reverse());
    //console.log(result);*/

    //const result = axios.get("http://127.0.0.1:8000/api/articles");
    const result = axios_instance.get("/articles");
    await result.then((result) => {
      setUser(result.data.reverse());
    });
  };

  const deleteUser = async (id) => {
    /*const result = await axios.delete(
      `http://127.0.0.1/laravelblog/api/articles/${id}`
    );*/

    //const result = axios.delete("http://127.0.0.1:8000/api/articles/" + id);

    const result = axios_instance.delete("/articles/" + id);

    loadUers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col"># id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row"># {user.id}</th>
                <td>{user.title}</td>
                <td>{user.body}</td>
                <td>{user.created_at}</td>
                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/users/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

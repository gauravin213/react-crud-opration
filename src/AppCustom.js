import React from "react";
import axios from "axios";

const pp_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5NzcwOTEyYmFmZjc2MzQxNjY3MzQ5NDM3MjU3OTNiNGM0NGYwMTRiMGMxZjdjMjRmY2MzNjZkN2QxYTNjOTNlZDRmNzRjMTg4ZDAzMGUxIn0.eyJhdWQiOiIxIiwianRpIjoiMzk3NzA5MTJiYWZmNzYzNDE2NjczNDk0MzcyNTc5M2I0YzQ0ZjAxNGIwYzFmN2MyNGZjYzM2NmQ3ZDFhM2M5M2VkNGY3NGMxODhkMDMwZTEiLCJpYXQiOjE1OTE2MzUyNjUsIm5iZiI6MTU5MTYzNTI2NSwiZXhwIjoxNjIzMTcxMjY1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.T8j0wRMGq3odR8D0XgTXWYv0e9hQPjdlB6SJlcDMn6_vfF05BZa8AvR7xOgnU36-R6AbUekcZ_X9JZ7RYHm1DXaqNgtjZDcb2Dgn1h5aUuwKPSJ91QIHJfMnL9VGEvMUQPKkRhQ0c3e5nADYZ4a2TG5I2HfXj961jLJCDpSVcc48laikVmEElzv102R0N38G_yIRPTzZs48WSTSBaspD6O8pIiH0yaJqNUX69E2doN8sv4rZEW7SuitJsg7k3j6Dno9L1UuvwQigsA6XSaJ8265y5zflJgsZtir2ykZJTC1_zUTv3DCTG5u8VCU5mmJ9YDEjLIyoK74z4JVU0qe3yE9-uMEcp_CXAsjXXBGMWs9Mxl3PAx5-id0RQr_6zCIWMR1gSZKUAeh854Wtlu-epWciyaW3tawP0i6r2edsFL_Cl8aRR9zXdV6q31Muq_sIdQqy5Gz0g8h0wzEO2LugBgiuLLkUdQFCzf_FFujlV34Gfql1ncxBirXPbPqThpsSLgEYxuboeHyCLxQ8MjTNnG5OZSioN4dWOl2qz5BFxKdX2JuWx_AWD-rWjzTIkI6T57jHN1Q4oQ_E8z2GwTE2oI1lFkDqGIju4XQn1GmRi9-6dOSfjhCep6LZ_Stw7MBpdAIV7coskr14kgQmVgZUxPg79VeOPgS7iduqmSUl31M";

/*
 * Working method 1
 */
/*axios.interceptors.request.use(
  function (config) {
    config.headers.authorization = `Bearer ${pp_token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);*/
/*
 * Working method 1
 */

/*
 * Working method 3
 */
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: { Authorization: "Bearer " + pp_token },
});
/*
 * Working method 3
 */

function App() {
  /*
   * Working method 2
   */
  /*axios
    .get("http://127.0.0.1:8000/api/user", {
      headers: {
        authorization: "Bearer " + pp_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("-------------1----------------");
      console.log(response);
      console.log("-----------------------------");
    })
    .catch((error) => {
      console.log("------------2-----------------");
      console.log(error);
      console.log("-----------------------------");
    });*/

  /*
   * Working method 2
   */

  //const result = axios.get("http://127.0.0.1:8000/api/articles");
  const result = instance.get("/articles");
  result.then((result) => {
    console.log("-----------------------------");
    console.log(result.data);
    console.log("-----------------------------");
  });

  return (
    <div className="App">
      <h1>Home Page</h1>
    </div>
  );
}

export default App;

import { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import axios, { AxiosResponse } from "axios";

interface Props {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<Props>({
    username: "",
    password: "",
  });

  const submitForm = () => {
    if (loginData.username === "" || loginData.password === "") {
      alert("username or password can't be blank");
      return;
    }
    axios
      .post("https://localhost:44379/Login/api/login", loginData)
      .then((response: AxiosResponse<number>) => {
        if (response.data > 0) {
          localStorage.setItem("Isauth", "1");
          navigate("/dashboard/");
        } else {
          ReactDOM.render(
            <Alert>Login is not successful. Please try again...</Alert>,
            document.getElementById("root")
          );
        }
      });
  };
  const handleReset = () => {
    setLoginData({
      username: "",
      password: "",
    });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-3">
          Username
          <input
            type="text"
            id="t1"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
        </div>

        <div className="row mb-3">
          Password
          <input
            type="password"
            id="t2"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={submitForm}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

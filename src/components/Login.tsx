import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Login = () => {
  const navigate = useNavigate();
  let [uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("username or password can't be blank");
      return;
    }
    if (uname === "admin" && pwd === "admin") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "1");
      navigate("/dashboard/");
    } else {
      ReactDOM.render(
        <Alert>Login is not successful. Please try again...</Alert>,
        document.getElementById("root")
      );
    }
  };
  const handleReset = () => {
    setUname("");
    setPwd("");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-3">
          Username
          <input
            type="text"
            id="t1"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          Password
          <input
            type="password"
            id="t2"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={doLogin}
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

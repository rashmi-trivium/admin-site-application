import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate = useNavigate();
  const goToClientsList = () => {
    navigate("/clientsList");
  };
  const goToUsersList = () => {
    navigate("/usersList");
  };
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    localStorage.setItem("Isauth", "0");
    navigate("/login");
  };
  if (localStorage.getItem("Isauth") === "0") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <p>Welcome {localStorage.getItem("uname")}!</p>
        <button onClick={goToClientsList} className="btn btn-primary m-2">
          Client Records
        </button>
        <button onClick={goToUsersList} className="btn btn-primary m-2">
          User Records
        </button>
        <button onClick={doLogout} className="btn btn-secondary m-2">
          Logout
        </button>
      </div>
    );
  }
};

export default DashBoard;

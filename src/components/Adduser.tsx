import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  companyID: string;
  companyName: string;
  username: string;
  userType: string;
}

const AddUser = () => {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [companyID, setCompanyID] = useState("");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setErrors] = useState("");

  const submit = () => {
    const user: Props = {
      id: "0",
      companyID,
      companyName,
      username,
      userType,
    };
    axios
      .post("https://localhost:44379/Admin/api/adduser", user)
      .then((response: AxiosResponse<number>) => {
        navigate("/usersList");
      })
      .catch((error) => setErrors(error.message))
      .finally();
  };

  const resetForm = () => {
    setCompanyID("");
    setCompanyName("");
    setUsername("");
    setUserType("");
  };

  return (
    <>
      {error && <div>{error}</div>}

      <div className="container-fluid">
        <div className="row mb-3">
          <label htmlFor="colFormLabelSm" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="colFormLabelSm"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="form-label">
            Company ID
          </label>
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            value={companyID}
            onChange={(e) => setCompanyID(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabelLg" className="form-label">
            User Type
          </label>
          <input
            type="text"
            className="form-control"
            id="colFormLabelLg"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          />
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={submit}
          >
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary m-2"
            onClick={resetForm}
          >
            Reset
          </button>
          <button
            onClick={() => navigate("/usersList")}
            className="btn btn-primary"
          >
            Back to List
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;

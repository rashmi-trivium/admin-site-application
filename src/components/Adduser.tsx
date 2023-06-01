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

  const [userData, setUserData] = useState<Props>({
    id: "0",
    companyID: "",
    companyName: "",
    username: "",
    userType: "",
  });
  const [error, setErrors] = useState("");

  const submit = () => {
    axios
      .post("https://localhost:44379/Admin/api/adduser", userData)
      .then((response: AxiosResponse<number>) => {
        navigate("/usersList");
      })
      .catch((error) => setErrors(error.message))
      .finally();
  };

  const resetForm = () => {
    setUserData({
      id: "0",
      companyID: "",
      companyName: "",
      username: "",
      userType: "",
    });
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
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
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
            value={userData.companyID}
            onChange={(e) =>
              setUserData({ ...userData, companyID: e.target.value })
            }
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
            value={userData.companyName}
            onChange={(e) =>
              setUserData({ ...userData, companyName: e.target.value })
            }
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
            value={userData.userType}
            onChange={(e) =>
              setUserData({ ...userData, userType: e.target.value })
            }
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

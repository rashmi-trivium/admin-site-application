import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  company: string;
  userName: string;
  userType: string;
}

const AddUser = () => {
  const navigate = useNavigate();

  const [company, setCompany] = useState("");
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");

  const submit = () => {
    const user: Props = {
      company,
      userName,
      userType,
    };
    console.log(user);
  };

  const resetForm = () => {
    setCompany("");
    setUserName("");
    setUserType("");
  };

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <label htmlFor="colFormLabelSm" className="form-label">
          User Name
        </label>
        <input
          type="text"
          className="form-control"
          id="colFormLabelSm"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="row mb-3">
        <label htmlFor="colFormLabel" className="form-label">
          Company
        </label>
        <input
          type="text"
          className="form-control"
          id="colFormLabel"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
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
        <button type="button" className="btn btn-primary m-2" onClick={submit}>
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
  );
};

export default AddUser;

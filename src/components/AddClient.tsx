import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  clientId?: string;
  clientName: string;
  gender: string;
  annualSalary: string;
  dateOfBirth: string;
}

const AddClient = () => {
  const navigate = useNavigate();

  const [clientName, setClientName] = useState("");
  const [gender, setGender] = useState("");
  const [annualSalary, setAnnualSalary] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setErrors] = useState("");

  const submit = () => {
    const client: Props = {
      clientName,
      gender,
      annualSalary,
      dateOfBirth,
    };
    axios
      .post("https://localhost:44379/Admin/api/addclient", client)
      .then((response: AxiosResponse<number>) => {
        navigate("/clientsList");
      })
      .catch((error: AxiosError) => setErrors(error.message))
      .finally();
  };

  const resetForm = () => {
    setClientName("");
    setGender("");
    setAnnualSalary("");
    setDateOfBirth("");
  };
  return (
    <>
      {error && <div>{error}</div>}

      <div className="container-fluid">
        <div className="row mb-3">
          <label htmlFor="colFormLabelSm" className="form-label">
            Client Name
          </label>
          <input
            type="text"
            className="form-control"
            id="colFormLabelSm"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="form-label">
            Annual Salary
          </label>
          <input
            type="number"
            className="form-control"
            id="colFormLabel"
            value={annualSalary}
            onChange={(e) => setAnnualSalary(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabelLg" className="form-label">
            Date of Birth
          </label>
          <input
            type="text"
            className="form-control"
            id="colFormLabelLg"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
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
            onClick={() => navigate("/clientsList")}
            className="btn btn-primary"
          >
            Back to List
          </button>
        </div>
      </div>
    </>
  );
};

export default AddClient;

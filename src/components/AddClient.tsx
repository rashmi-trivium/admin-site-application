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
  const [clientData, setClientData] = useState<Props>({
    annualSalary: "",
    clientName: "",
    dateOfBirth: "",
    gender: "",
  });
  const [error, setErrors] = useState("");

  const submit = () => {
    axios
      .post("https://localhost:44379/Client/api/addclient", clientData)
      .then((response: AxiosResponse<number>) => {
        navigate("/clientsList");
      })
      .catch((error: AxiosError) => setErrors(error.message))
      .finally();
  };

  const resetForm = () => {
    setClientData({
      annualSalary: "",
      clientName: "",
      dateOfBirth: "",
      gender: "",
    });
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
            value={clientData.clientName}
            onChange={(e) =>
              setClientData({ ...clientData, clientName: e.target.value })
            }
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
            value={clientData.gender}
            onChange={(e) =>
              setClientData({ ...clientData, gender: e.target.value })
            }
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
            value={clientData.annualSalary}
            onChange={(e) =>
              setClientData({ ...clientData, annualSalary: e.target.value })
            }
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
            value={clientData.dateOfBirth}
            onChange={(e) =>
              setClientData({ ...clientData, dateOfBirth: e.target.value })
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

import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  clientId: string;
  clientName: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;
}

const Details = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState("");
  const [clientData, setClientData] = useState<Props>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://localhost:44379/Client/api/getclientlist/${id}`)
      .then((response: AxiosResponse<Props>) => {
        setClientData(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          <h1>Client Details Page: {clientData?.clientId}</h1>
          <div>
            Name : {clientData?.clientName}
            <br></br>
            Gender : {clientData?.gender}
            <br></br>
            Annual Salary : {clientData?.annualSalary}
            <br></br>
            Date Of Birth : {clientData?.dateOfBirth}
            <br></br>
          </div>
          <button onClick={() => navigate("/clientsList")}>Back to List</button>
        </div>
      )}
    </>
  );
};

export default Details;

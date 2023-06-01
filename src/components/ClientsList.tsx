import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  clientId: string;
  clientName: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;
}

const ClientsList = () => {
  const navigate = useNavigate();
  const [clientList, setClientList] = useState<Props[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState("");

  const goToDetails = (item: Props) => {
    navigate(`/details/${item.clientId}`);
  };

  useEffect(() => {
    axios
      .get("https://localhost:44379/Client/api/getclientlist")
      .then((response: AxiosResponse<Props[]>) => setClientList(response.data))
      .catch((error) => setErrors(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const deleteClient = (id: string) => {
    const originalState = [...clientList];
    setClientList(clientList.filter((x) => x.clientId !== id));
    axios
      .delete("https://localhost:44379/Client/api/deleteclient" + id)
      .catch((err) => {
        setErrors(err.message);
        setClientList(originalState);
      });
  };

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          <h2>Clients List</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Client ID</th>
                <th scope="col">Client Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Salary</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              {clientList.map((item, index) => (
                <tr key={index}>
                  <td>{item.clientId}</td>
                  <td>{item.clientName}</td>
                  <td>{item.gender}</td>
                  <td>{item.annualSalary}</td>
                  <td>{item.dateOfBirth}</td>
                  <td>
                    <button
                      onClick={() => {
                        goToDetails(item);
                      }}
                    >
                      Details
                    </button>
                    <button onClick={() => deleteClient(item.clientId)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => navigate("/addClient")}
            className="btn btn-primary m-2"
          >
            Add Client
          </button>
        </div>
      )}
    </>
  );
};

export default ClientsList;

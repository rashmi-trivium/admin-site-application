import { useNavigate } from "react-router-dom";

interface Props {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;
}

const ClientsList = () => {
  const navigate = useNavigate();

  const goToDetails = (item: Props) => {
    navigate(`/details/${item.code}`);
  };

  let clients = [
    {
      code: "e001",
      name: "Tom",
      gender: "Male",
      annualSalary: 5500,
      dateOfBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Sam",
      gender: "Male",
      annualSalary: 6700,
      dateOfBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Ravi",
      gender: "Male",
      annualSalary: 8900,
      dateOfBirth: "27/11/1980",
    },
    {
      code: "e004",
      name: "Kaveri",
      gender: "Female",
      annualSalary: 9000,
      dateOfBirth: "9/6/1991",
    },
  ];

  return (
    <>
      <h2>Clients List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Salary</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClientsList;

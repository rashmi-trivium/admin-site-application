import { useNavigate } from "react-router-dom";
import axios from "axios";
import useUser from "../hooks/useUser";

interface Props {
  id: string;
  companyID: string;
  companyName: string;
  username: string;
  userType: string;
}

const UsersList = () => {
  const navigate = useNavigate();
  const { userList, error, isLoading, deleteUser } = useUser();

  const goToUserDetails = (item: Props) => {
    navigate(`/userDetails/${item.id}`);
  };

  // const handleSearch = (searchString: string) => {
  //   const filteredData = userList.filter((item) => {
  //     Object.keys(item).forEach((key) => {
  //       if (item[key].includes(searchString)) return item;
  //     });
  //   });
  //   setUserList(filteredData);
  // };

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          <h2>Users List</h2>
          <br />
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            // onChange={(event) => handleSearch(event.target.value)}
          />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Company</th>
                <th scope="col">User Type</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.companyName}</td>
                  <td>{item.userType}</td>
                  <td>
                    <button
                      onClick={() => {
                        goToUserDetails(item);
                      }}
                    >
                      Details
                    </button>
                    <button onClick={() => deleteUser(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button
            onClick={() => navigate("/addUser")}
            className="btn btn-primary m-2"
          >
            Add User
          </button> */}
          <button
            onClick={() => navigate("/addUser")}
            className="btn btn-primary m-2"
          >
            Add User
          </button>
        </div>
      )}
    </>
  );
};

export default UsersList;

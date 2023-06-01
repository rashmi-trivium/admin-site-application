import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Props {
  id: string;
  companyID: string;
  companyName: string;
  username: string;
  userType: string;
}

const UserDetails = () => {
  let { userId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErrors] = useState("");
  const [userData, setUserData] = useState<Props>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://localhost:44379/Admin/api/getuserlist/${userId}`)
      .then((response: AxiosResponse<Props>) => {
        setUserData(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{userData?.username}</h5>
              <div className="card-body">
                <div>ID : {userData?.id}</div>
                <br />
                <div>Name : {userData?.username}</div>
                <br />
                <div>Company name : {userData?.companyName}</div>
                <br />
                <div>User Type : {userData?.userType}</div>
              </div>
              <button onClick={() => navigate("/usersList")}>
                Back to List
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;

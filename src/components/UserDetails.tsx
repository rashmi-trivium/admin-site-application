import { useNavigate, useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import { useEffect, useState } from "react";

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
  const { userList, isLoading } = useUser();
  const [userData, setUserData] = useState<Props>();

  useEffect(() => {
    const data = userList.filter((item) => item.id == userId);
    setUserData(data[0]);
  }, [isLoading]);

  return (
    <>
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

import { useNavigate, useParams } from "react-router-dom";
const UserDetails = () => {
  let { userId } = useParams();
  const navigate = useNavigate();

  let user = {
    company: "c001",
    userName: "Tom",
    userType: "Male",
  };
  return (
    <div>
      <h1>User Details Page: {userId}</h1>
      <div>
        User Name : {user.userName}
        <br></br>
        Company : {user.company}
        <br></br>
        User Type : {user.userType}
        <br></br>
      </div>
      <button onClick={() => navigate("/usersList")}>Back to List</button>
    </div>
  );
};

export default UserDetails;

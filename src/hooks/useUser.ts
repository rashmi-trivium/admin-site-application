import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  id: string;
  companyID: string;
  companyName: string;
  username: string;
  userType: string;
}

interface Props1 {
  data: Props[];
}

const useUser = () => {
  const [userList, setUserList] = useState<Props[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://localhost:44379/Admin")
      .then((response: Props1) => {
        setUserList(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  

  const deleteUser = (user: Props) => {
    const originalState = [...userList];
    setUserList(userList.filter((x) => x.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setErrors(err.message);
        setUserList(originalState);
      });
  };
  const addUser = () => {
    const newUser: Props = {
       id: "0",
       companyID: "0",
       companyName: "Trivium",
       userType: "admin",
       username: "Rashmi",
       };
    setUserList([...userList, newUser]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUserList([...userList, res.data]));
  };

  return { userList, error, isLoading, addUser, deleteUser };
};

export default useUser;

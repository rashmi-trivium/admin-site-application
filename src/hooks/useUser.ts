import axios, { AxiosResponse } from "axios";
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
      .get("https://localhost:44379/Admin/api/getuserlist")
      .then((response: Props1) => {
        setUserList(response.data);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  

  const deleteUser = (id: string) => {
    const originalState = [...userList];
    setUserList(userList.filter((x) => x.id !== id));
    axios
      .delete("https://localhost:44379/Admin/api/deleteuser/" + id)
      .then((response: AxiosResponse<number>) => {
        if (response.data) alert("Row deleted successfully!");
      })
      .catch((err) => {
        setErrors(err.message);
        setUserList(originalState);
      });
  };

  return { userList, error, isLoading, deleteUser };
};

export default useUser;

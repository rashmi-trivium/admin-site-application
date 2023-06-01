import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ClientsList from "./components/ClientsList";
import Details from "./components/Details";
import AddUser from "./components/Adduser";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import AddClient from "./components/AddClient";

const RouteConfig = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="clientsList" element={<ClientsList />} />
        <Route path="addClient" element={<AddClient />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="usersList" element={<UsersList />} />
        <Route path="userDetails/:userId" element={<UserDetails />} />
        <Route path="addUser" element={<AddUser />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default RouteConfig;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteConfig from "./RouteConfig";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <RouteConfig />
    </>
  );
}

export default App;

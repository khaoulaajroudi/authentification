import "./App.css";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord";
import Navbar from "./Components/CompStatic/Navbar/Navbar";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "./JS/Actions/User";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashbord />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

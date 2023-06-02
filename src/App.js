import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Pages/Signin.js";
// import ManageProducts from "./Pages/ManageProducts.js";
import "../node_modules/@flaticon/flaticon-uicons/css/all/all.css";
import Dashboard from "./Pages/Dashboard.js";
import Profile from "./Pages/Profile.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Specifying these routes temporarily Will Do it Accordingly */}

          {/* <Route path="/" element={<ManageProducts />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

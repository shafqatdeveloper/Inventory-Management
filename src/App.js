import "./App.css";
// import AddUser from "./components/AddUser.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/Signin.js";
import ManageProducts from "./components/ManageProducts.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Specifying these routes temporarily Will Do it Accordingly */}
          {/* <Route path="/" element={<AddUser />} /> */}

          <Route path="/" element={<ManageProducts />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

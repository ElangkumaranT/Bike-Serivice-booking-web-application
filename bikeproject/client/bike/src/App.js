import { BrowserRouter,Route,Routes} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Register from "./Register";
import reportWebVitals from "./reportWebVitals";
import Login from "./Login";
import Home from "./Home";
import Owner from "./Owner";

function App() {
  return (
<> 
<BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Owner" element={<Owner />} />
      </Routes> 
  </BrowserRouter>
  

</>
  );
}

export default App;

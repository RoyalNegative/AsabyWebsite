import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import "./styles/style.css"
import Logo from "../src/assets/images/logoblack.svg"
import Preloader from "./components/Preloader";
function App() {
  return (
    <>
    <Preloader 
      type="logo" 
      logo={Logo}
      bgColor="#f5f7fa"
      spinnerColor="#000000" 
    />
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/Home2" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;
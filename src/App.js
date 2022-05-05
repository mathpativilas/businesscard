import React from "react";
import Header from "./components/Header.js";
import Aboutsec from "./components/Aboutsec.js";
import Footer from "./components/Footer.js";
import "./App.css";
function App() {
  // const obj = {
  //   dppix: "./images/prof.jpg",
  // };
  return (
    <div className="card">
      <Header />
      <Aboutsec />
      <Footer />
    </div>
  );
}

export default App;

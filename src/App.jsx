import axios from "axios";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MainRouter from "./routing/MainRouter";
import ProductCard from "./components/ProductCard";

const App = () => {
  
  
  return (
    <div>
      <Navbar />
      <MainRouter />


    </div>
  );
};

export default App;

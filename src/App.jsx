import axios from "axios";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MainRouter from "./routing/MainRouter";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const App = () => {
  
  
  return (
    <div>
      <Navbar />
      <MainRouter />
      <Footer />


    </div>
  );
};

export default App;

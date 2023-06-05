import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Highlights from "../../Components/Home/Highlights/Highlights";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="homeContainer">
        <Highlights />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

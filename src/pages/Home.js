import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header page="index" custom="navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" />
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;

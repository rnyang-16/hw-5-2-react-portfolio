import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ProjectCards from "../components/ProjectCards";

const Home = () => {
  return (
    <div>
      <Header page="portfolio" custom="navbar-expand-lg bg-dark" />
      <Main name='Portfolio'>
        <ProjectCards />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;

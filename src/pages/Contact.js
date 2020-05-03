import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import EmailForm from "../components/EmailForm";

const Home = () => {
  return (
    <div>
      <Header page="contact" custom="navbar-expand-lg bg-dark" />
      <Main name='Contact'>
        <EmailForm />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;

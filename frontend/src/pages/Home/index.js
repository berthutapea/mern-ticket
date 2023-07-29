import React from "react";
import Event from "../Event";
import Contact from "../Contact";
import { Banner, Footer } from "../../components";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Event />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

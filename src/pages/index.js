import React, { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Spinner from "../components/Spinner";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 2500);
  }, []);

  return (
    <>
      {spinner === false ? (
        <div>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeroSection />
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <Services />
          <Team />
          <InfoSection {...homeObjThree} />
          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;

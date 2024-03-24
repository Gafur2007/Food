import React from "react";
import "./App.scss";

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Menu from "./Components/Menu/Menu";
import Apps from "./Components/App/Apps";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Menu />
      <Apps />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import Nav from './components/Nav/Nav';
import Hero from "./components/Hero/Hero";
import Strategic from "./components/Strategic/Strategic";
import Keypoints from "./components/Keypoints/Keypoints";
import Slide from "./components/Slide/Slide";
import Footer from "./components/Footer/Footer";

// styles
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main style={{overflow: 'hidden'}}>
        <Hero />
        <Strategic />
        <Keypoints />
        <Slide />
      </main>
      <Footer />
    </>
  );
}

export default App;

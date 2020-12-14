import React from "react";
import Nav from './components/Nav/Nav';
import Hero from "./components/Hero/Hero";
import Strategic from "./components/Strategic/Strategic";
import Keypoints from "./components/Keypoints/Keypoints"

// styles
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Strategic />
        <Keypoints />
      </main>
    </>
  );
}

export default App;

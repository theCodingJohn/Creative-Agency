import React from "react";
import Nav from './components/Nav/Nav';
import Hero from "./components/Hero/Hero";
import Strategic from "./components/Strategic/Strategic";

// styles
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Strategic />
      </main>
    </>
  );
}

export default App;
